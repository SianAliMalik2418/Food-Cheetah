import SearchRestaurantPageUi from "@/components/Restaurant/searchRestaurants/SearchRestaurantPageUi";

const SearchWithCityPage = ({ params }) => {
  const cityName = params.cityName;

  return <SearchRestaurantPageUi cityName={cityName}  />;
};
export default SearchWithCityPage;
