import { Link } from 'react-router-dom';
import { Button } from '../button/button';
import style from './hero-card.module.css';

export interface HeroCardProps{
  id: string;
  name: string;
  description:string;
  image: string;
  buttonLabel: string
} 

export const HeroCard: React.FunctionComponent<HeroCardProps> = ( props: HeroCardProps) => (
  <article className={style.card}>
     <img src={props.image} alt={props.name} />
     <p>{props.description}</p>
     <Link to={`/character/${props.id}`}>
        <Button
          theme="violet"
          label={props.buttonLabel}
        />
     </Link>
  </article>
)