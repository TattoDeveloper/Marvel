
import { Button } from '../button/button';
import style from './banner.module.css';

interface BannerProps{
   title: string,
   text: string,
   buttonLabel: string,
   logo: string,
   image: string
}

export const Banner: React.FunctionComponent<BannerProps> = ( props: BannerProps) => (
   <div className={style.banner}>
      <div className={style.bannerImage}>
         <img src={ props.image } alt=""/>
      </div>
      <div className={style.bannerInfo}>
          <h2>{ props.title }</h2>
          <p>{ props.text }</p>
          <div>
            <Button 
              label={props.buttonLabel}
              theme='violet'
            />
            <img src={ props.logo } alt=""/>
          </div>
      </div>
      
   </div>
)
