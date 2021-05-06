import React from 'react';
import { Slider } from '../../components/slider/slider';
import { homeHeader, gallery } from '../../../assets/text/data.json';
import style from './character.module.css';
import { useParams } from 'react-router';
import { HeroCardProps } from '../../components/hero-card/hero-card';
import { Detail } from '../../components/detail/detail';
import { useFetch } from '../../../hooks/useFetch';
import { getData } from '../../../services/user/hero.service';

interface Params{
  id: string
}
export const CharacterPage: React.FunctionComponent = () =>{
   
  const params: Params = useParams();
  const { name, image, description } : any = gallery.heros.find( hero => hero.id === params.id)
  const { isLoad, data } = useFetch(getData,[params.id])
  console.log(data)
  return (
    <div>
      <section className={`${style.mainSection} homeContainer`}>
       <div className="guide">
             <h2 className={style.bigTitle}>{ name }</h2>
             <div className={style.heroContainer}>
                <img src={image} alt={name} />
                <div className={style.heroInfo}>
                  <h3>{ name }</h3>
                  <p>{ description }</p>
                </div>
             </div>
       </div>
      </section>

      <section className={`${style.detail} homeContainer`}>
       <div className="guide">
          <Detail 
            {...{description:"sasas"}}
          />
       </div>
      </section>

      <section className={`${style.gallerySection} homeContainer`}>
       <div className="guide">
           <header>
             <h2 className={style.galleryTitle}>{ gallery.title }</h2>
             
           </header>
           <Slider heros={gallery.heros.filter( hero => hero.id !== params.id )} />
          
       </div>
      </section>
    </div>
  )
};