import { CharacterEntity } from '../../../core/entities/character';
import { TapBLock, TapView } from '../TapContainer/TapContainer';
import style from './detail.module.css';

type DetailProps<T> = {
  [K in keyof T]?: T[K];
}
export const Detail: React.FunctionComponent<DetailProps<CharacterEntity>> = ( props : DetailProps<CharacterEntity>) => (
  <nav className={style.menuDesktop}>
     
     <TapBLock
      tapList={[
         "Biografía",
         "Peliculas",
         "Comics"
      ]}
     >
       <TapView>
          {props.description}
       </TapView>
       <TapView>
          {props.description}
       </TapView>
       <TapView>
          {props.description}
       </TapView>
     </TapBLock>
  </nav>
)