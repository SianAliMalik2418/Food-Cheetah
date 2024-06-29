import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { connectDB } from "@/db/dbConfig";
import { UserModel } from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
// In google console redirect uri write this http://localhost:3000/api/auth/callback/google
// In Github console redirect uri write this http://localhost:3000/api/auth/callback/github
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Credentials({
      name: "credentials",
      credentials: {},

      async authorize(req, credentials) {
        try {
          await connectDB();
          const { email, password } = credentials.body;

          if (!email || !password) {
            return null;
          }

          const isUser = await UserModel.findOne({ email });

          if (!isUser) {
            // return NextResponse.json({message : "Invalid Credentials!"} , {status : 404})
            return null;
          }

          const isPasswordMatch = bcrypt.compareSync(password, isUser.password);

          if (!isPasswordMatch) {
            // return NextResponse.json({message : "Invalid Credentials!"} , {status : 401})
            return null;
          }

          return {
            id: isUser._id,
            username: isUser.username,
            email: isUser.email,
          };
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google" || account.provider === "github") {
        const { name, email } = user;

        if (!name || !email) {
          return null;
        }

        try {
          await connectDB();
          const isUser = await UserModel.findOne({ email });

          if (isUser) {
            return user;
          }

          const newUser = new UserModel({
            username: name,
            email,
          });

          const resp = await newUser.save();
          user._id = resp._id;

          if (resp.status === 200 || resp.status === 201) {
            return user;
          }
        } catch (error) {
          console.log(error);
          return null;
        }
      }

      return user;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.username = user.username || user.name;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id || token.sub;
        session.user.name = token.username;
        session.user.email = token.email;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },
};
