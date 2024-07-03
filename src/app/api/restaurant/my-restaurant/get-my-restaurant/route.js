import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectDB } from "@/db/dbConfig";
import { RestaurantModel } from "@/models/restaurantModel";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json("USER ID NOT FOUND!");
    }
  try {
    await connectDB();
    const restaurant = await RestaurantModel.findOne({ userId });
    if (!restaurant) {
      return NextResponse.json("No restaurant found for current user!", {
        status: 404,
      });
    }
    return NextResponse.json(restaurant, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("SOMETHING WENT WRONG", {
      status: 500,
    });
  }
};
