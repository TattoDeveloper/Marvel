import React from 'react';
import { CharacterEntity } from '../../../core/entities/character';
import { ComicsEntity } from '../../../core/entities/comics.entity';
import { useFetch } from '../../../hooks/useFetch';
import { CharacterViewModel } from '../../pages/character/viewModel';
import { TapBLock, TapView } from '../TapContainer/TapContainer';
import style from './detail.module.css';

/* type DetailProps<T> = {
  [K in keyof T]?: T[K];
}
 */
interface DetailProps {
  id : string
}

export const Detail: React.FunctionComponent<DetailProps> = ( {id}: DetailProps) => {
  const entity : any = {}
  const [data, setData] = React.useState(entity);
  const [loading, setLoading] = React.useState(false);
 
  React.useEffect(()=>{
    async function get(){
       setLoading(true)
        const data: any = await CharacterViewModel(id)
        setData(data);
        setLoading(false)
        
    }

    get()
  },[id])
  
  return(     
       <TapBLock
        tapList={[
           "Biografía",
           "Comics",
           "Series"
        ]}
       >
           {
             data.description && <>
                 <TapView>
                      <p className={style.description}>{ data.description }</p>
                
                      </TapView>
                      <TapView>
                          <div className={style.cards}>
                          {data.comics.map((element:any)=>{
                            return <p>{element}</p>
                          })}
                          </div>
                      </TapView>
                      <TapView>
                      <div className={style.cards}>
                          {data.series.map((element:any)=>{
                            return <p>{element}</p>
                          })}
                          </div>
                      </TapView>
             </>
           }
       </TapBLock>
  )
}