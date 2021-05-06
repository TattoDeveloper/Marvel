import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Navigation} from 'swiper'
import { HeroCard } from '../hero-card/hero-card'
import style from './slider.module.css'
import { useResponsive } from '../../../hooks/useResposive'

interface SliderProps {
   heros: Array<any>
   filter?: string
}

SwiperCore.use([Navigation])
export const Slider: React.FunctionComponent<SliderProps> = ( {heros, filter}: SliderProps) => {

   return(
      <div className={style.slider}>
         <Swiper 
            spaceBetween={20}
            loop
            navigation
            onChange={(swiper)=> console.log(swiper)}
            breakpoints={{
               1300:{ slidesPerView: 4 },
               1024:{ slidesPerView:2 },
               768:{ slidesPerView: 1}
            }}
         >
            { heros.map(hero =>{
               return <SwiperSlide key={hero.id}>
                     <HeroCard {...hero} />
               </SwiperSlide>
            }) }
         </Swiper>
      </div>
   )
}