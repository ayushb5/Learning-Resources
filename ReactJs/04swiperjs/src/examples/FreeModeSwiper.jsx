import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function FreeModeSwiper() {
    const images = ["/Images/tortoise.jpg", "/Images/butterfly.jpg", "/Images/cat.jpg", "/Images/deer.jpg", "/Images/elephant.jpg", "/Images/horse.jpg", "/Images/lion.jpg"]
    return (
        <div>
            <Swiper slidesPerView={2} spaceBetween={20} freeMode={true} pagination={{ clickable: true }} modules={[FreeMode, Pagination]}>
                {images.map((path, index) => (
                    <SwiperSlide key={index}>
                        <img src={path} className="h-100 p-2 w-full object-contain" alt="slide image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}

export default FreeModeSwiper