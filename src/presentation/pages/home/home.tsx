import style from './home.module.css';
import { Button } from '../../components/button/button';
import React from 'react';
import { homeHeader, gallery } from '../../../assets/text/data.json';
import { Banner } from '../../components/banner/banner';
import { Slider } from '../../components/slider/slider';
import { useDispatch } from 'react-redux';



interface MainInfoProps{
  title: string;
  description: string;
  buttonLabel: string
}

const MainInfo: React.FunctionComponent<MainInfoProps> = ({title, description, buttonLabel} : MainInfoProps) =>(
   <div className={style.mainInfo}>
     <h1>{title}</h1>
     <p>{description}</p>
     <Button
      label={buttonLabel}
     />
   </div>
);
export const HomePage: React.FunctionComponent = () =>{

  return (
    <div>
      <section className={`${style.mainSection} homeContainer`}>
       <div className="guide">
           <div className={style.mainSectionInfo}>
                <MainInfo 
                  title={homeHeader.title}
                  description={homeHeader.description}
                  buttonLabel={homeHeader.button}
                />
                <div className={style.mainSectionImageContainer}>
                    <img src={homeHeader.img.path}  alt={homeHeader.img.alt}/>
                </div>
           </div>
       </div>
      </section>

      <section className={`${style.gallerySection} homeContainer`}>
       <div className="guide">
           <header>
             <h2 className={style.galleryTitle}>{ gallery.title }</h2>
           </header>
           <Slider heros={gallery.heros} />
           
           <Banner
             {...gallery.banner}
           />
       </div>
      </section>
    </div>
  )
};