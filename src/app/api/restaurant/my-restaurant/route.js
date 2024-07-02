import { connectDB } from "@/db/dbConfig";
import { RestaurantModel } from "@/models/restaurantModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const reqBody = await req.json();

  console.log(reqBody);

  try {

    await connectDB();

    const restaurantExist = await RestaurantModel.findOne({
      user: reqBody.userId,
    });

    if (restaurantExist) {
      return NextResponse.json("User already has a restaurant!", {
        status: 409,
      });
    }

    const restaurant = new RestaurantModel(reqBody);

    await restaurant.save();

    return NextResponse.json({ message: "Restaurant created", restaurant });
  } catch (error) {
    console.log(error);
    return NextResponse.json("SOMETHING WENT WRONG", {
      status: 500,
    });
  }
};
