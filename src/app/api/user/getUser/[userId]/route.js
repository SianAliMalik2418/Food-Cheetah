import { connectDB } from "@/db/dbConfig";
import { UserModel } from "@/models/userModel";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { userId } = params;

  try {
    await connectDB();

    const user = await UserModel.findById(userId);

    if (!user) {
      return NextResponse.json("User not found!");
    }

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json("SOMETHING WENT WRONG!");
  }
};
