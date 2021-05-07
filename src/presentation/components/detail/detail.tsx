import React from 'react';
import { CharacterViewModel } from '../../pages/character/viewModel';
import { TapBLock, TapView } from '../TapContainer/TapContainer';
import style from './detail.module.css';
import { noFound } from '../../../assets/text/data.json'

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
           
          <TapView>
             <p className={style.description}>{ data.description && data.description.length > 0 ? data.description :  noFound }</p>
          </TapView>
          <TapView>
              <div className={style.cards}>
                {data.comics && data.comics.map((element:any)=>{
                    return<p>{element.name}</p>
                })}
               </div>
           </TapView>
            <TapView>
               <div className={style.cards}>
                  {data.series && data.series.map((element:any)=>{
                     return<p>{element.name}</p>
                  })}
                </div>
            </TapView>
           
           
       </TapBLock>
  )
}