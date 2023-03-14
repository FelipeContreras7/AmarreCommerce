import "./destacados.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";


function Destacados ({ tarjetas }) {
  return(
    <div className="container">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {tarjetas.map((tarjeta) => (
                  <SwiperSlide key={tarjeta.foto}>
                    <div className="tarjeta">
                    <img src={tarjeta.foto} alt={tarjeta.id}/>
                    <h2>A partir de</h2>
                    <h3>${tarjeta.precio}</h3>
                    </div>
                  </SwiperSlide>
        ))}

      </Swiper>
      </div>
  )
}


export default Destacados;


