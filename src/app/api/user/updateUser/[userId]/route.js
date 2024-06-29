import { connectDB } from "@/db/dbConfig";
import { UserModel } from "@/models/userModel";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  const { userId } = params;
  const reqBody = await req.json();
  const { username, email } = reqBody;

  try {
    await connectDB();

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { username, email },
      { new: true },
    ).select("-password");

    return NextResponse.json(
      { message: "Profile Updated!", updatedUser },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json("Something went wrong!");
  }
};
