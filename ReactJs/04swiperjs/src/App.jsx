import CategoryCard from "./examples/CategoryCard";
import CustomPaginationSwiper from "./examples/CustomPaginationSwiper";
import Default from "./examples/Default";
import FreeModeSwiper from "./examples/FreeModeSwiper";
import NavigationSwiper from "./examples/NavigationSwiper";
import PaginationSwiper from "./examples/PaginationSwiper";

function App() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl p-2 font-semibold text-center">Default Swiper</h1>
        <Default />
        <h1 className="text-xl p-2 font-semibold text-center">Navigational Swiper</h1>
        <NavigationSwiper />
        <h1 className="text-xl p-2 font-semibold text-center">Pagination Swiper with dynamic bullets</h1>
        <PaginationSwiper />
        <h1 className="text-xl p-2 font-semibold text-center">Pagination Swiper Custom</h1>
        <CustomPaginationSwiper />
        <h1 className="text-xl p-2 font-semibold text-center">Free Mode Swiper</h1>
        <FreeModeSwiper />
        <h1 className="text-xl p-2 font-semibold text-center">Category Cards</h1>
        <CategoryCard />
      </div>

    </>
  )
}

export default App