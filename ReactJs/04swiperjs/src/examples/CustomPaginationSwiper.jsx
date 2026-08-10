import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"
import "./style.css"

function CustomPaginationSwiper() {
    const images = ["/Images/tortoise.jpg", "/Images/butterfly.jpg", "/Images/cat.jpg", "/Images/deer.jpg", "/Images/elephant.jpg", "/Images/horse.jpg", "/Images/lion.jpg"];
    const pagination = {
        clickable: true, renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
        }
    }
    return (
        <div>
            <Swiper pagination={pagination} modules={[Pagination]}>
                {images.map((path, index) => (
                    <SwiperSlide key={index}>
                        <img src={path} className="md:h-screen w-full object-cover" alt="slide image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CustomPaginationSwiper