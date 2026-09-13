import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "./card.css"

function CategoryCard() {
    const images = ["/Images/tortoise.jpg", "/Images/butterfly.jpg", "/Images/cat.jpg", "/Images/deer.jpg", "/Images/elephant.jpg", "/Images/horse.jpg", "/Images/lion.jpg"];
    return (
        <Swiper className="w-full" slidesPerView={2} spaceBetween={20} freeMode={true} pagination={{ clickable: true }} modules={[FreeMode, Pagination]}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 5,
                },
            }}>
            {
                images.map((path, index) => (
                    <SwiperSlide key={index} className="m-3 bg-gray-50 shadow-md rounded-sm border border-gray-200 overflow-hidden">
                        <img src={path} className="h-48 w-full p-2 object-contain" alt="slide image" />
                    </SwiperSlide>
                ))
            }
        </Swiper >
    )
}

export default CategoryCard