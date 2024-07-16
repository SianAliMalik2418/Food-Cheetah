import { connectDB } from "@/db/dbConfig";
import { RestaurantModel } from "@/models/restaurantModel";
import { NextResponse } from "next/server";

export const PUT = async (request) => {
  const reqBody = await request.json();

  try {
    await connectDB();
    const restaurant = await RestaurantModel.findOne({
      _id: reqBody._id,
    });

    if (!restaurant) {
      return NextResponse.json("Restauarant not found", { status: 404 });
    }

    restaurant.restaurantName = reqBody.restaurantName;
    restaurant.country = reqBody.country;
    restaurant.city = reqBody.city;
    restaurant.coverImg = reqBody.coverImg;
    restaurant.deliveryTime = reqBody.deliveryTime;
    restaurant.deliveryPrice = reqBody.deliveryPrice;
    restaurant.cuisines = reqBody.cuisines;
    restaurant.menuItems = reqBody.menuItems;
    restaurant.updatedAt = new Date();
    restaurant.createdAt = reqBody.createdAt;

    await restaurant.save();

    return NextResponse.json("Restaurant Updated 🎊");
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      "Something went wrong while updating restaurant!",
      { status: 500 },
    );
  }
};
