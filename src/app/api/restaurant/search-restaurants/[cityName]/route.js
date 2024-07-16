import { connectDB } from "@/db/dbConfig";
import { RestaurantModel } from "@/models/restaurantModel";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  // _id: new ObjectId('66835a173fcd766da4937d8a'),
  //   userId: new ObjectId('6680be2bd3a88a9a135eddc9'),
  //   restaurantName: 'Sheikh Chilli ',
  //   country: 'Pakistan',
  //   city: 'Lahore',
  //   coverImg: 'https://res.cloudinary.com/x-clone/image/upload/v1719884281/pj1iorlxeib9j7g3tdij.jpg',
  //   deliveryTime: 40,
  //   deliveryPrice: 50,
  //   cuisines: [ 'BBQ', 'Desi', 'Steakhouse', 'Healthy Food' ],
  //   menuItems: [ [Object], [Object], [Object] ],
  //   __v: 0

  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const cityName = new RegExp(params.cityName, "i");
    const restaurantName = searchParams.get("restaurantName") || "";

    const query = {};

    query["city"] = new RegExp(cityName, "i");


    const cityCheck = await RestaurantModel.countDocuments(query);

    if (cityCheck === 0) {
      return NextResponse.json(
        { success: false, message: "No restaurant found in this city!" },
        { status: 404 },
      );
    }

    const restaurants = await RestaurantModel.find({
      city: cityName,
    });

    if (!restaurants) {
    }

    console.log(restaurants);

    return NextResponse.json(
      { success: true, message: `City Found`, restaurants },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 },
    );
  }
};
