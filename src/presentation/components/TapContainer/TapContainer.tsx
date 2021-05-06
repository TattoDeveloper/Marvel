import React, { MouseEventHandler } from 'react'
import style from './Tap.module.css'

interface TapProps{
  label: string;
  handler: MouseEventHandler;
  _id?:any;
  active?: string;
  index: Number;
}

export const Tap: React.FunctionComponent<TapProps> =({ label, handler, _id, active, index } : TapProps )=>(
    <button onClick={handler} data-id={_id} data-index={index}  
        className={`${style.tap} ${style[active!!]}`}>
        {label}
    </button>
)


interface TapMenuProps{
  current:any;
  children: any
}
export const TapMenu: React.FunctionComponent<TapMenuProps> =({current, children}: TapMenuProps)=>{
    return(
        <div className={style.tapContainer}>
           {React.Children.map(children, (child, _index)=>{
         
               return React.cloneElement(child, {
                   active:_index == current ? 'active' : '',
                   index: _index
               })
           })}
        </div>
    )
}

interface TapViewProps{
  children: any;
}

export const TapView: React.FunctionComponent<TapViewProps> = ({children}: TapViewProps)=>(
  <div className={style.view}>
     {children}
  </div>
)

/* export const TabSubBlock = ({title, subtitle, type,children}) =>(
  <div className={`${style.subBlock} ${style[type]}`}>
     <h4>{title}</h4>
     {subtitle && <span>{subtitle}</span>}
     {children}
  </div>
)
 */

/* export const TapSubBlockScores=({current, experience})=>(
   <div className={style.scores}>
      <div className={style.scoreItem}>
        <div>
          <div>
             <img src="./cup.png" />
          </div>
          <span>Completado</span>
        </div>
          <span>{current}%</span>
      </div>
      <div className={`${style.scoreItem} ${style.boldExp}`}>
        <div>
          <div>
            <img src="./ray.png" />
          </div>
          <span>Experiencia</span>
        </div>
          <span>{current}%</span>
      </div>
   </div>
) */


interface TapBlockProps{
  children:any;
  tapList: Array<any>
}
export const TapBLock: React.FunctionComponent<TapBlockProps>=({children, tapList}: TapBlockProps)=>{
  
  const [index, setIndex] = React.useState(0)

  const change=({target}: any)=>{
     setIndex(target.dataset.index)
  }

  return(
    <div className={style.block}>
      {console.log(index)}
        <TapMenu
          current={index}
        >
            {
              tapList.map((tap, index) =>{
                return<Tap label={tap} index={index} handler={change}/>
              })
            }
        </TapMenu>

        <div className={style.blockSliderCont}>
            <div className={style.blockSlider}>
                {React.Children.map(children, (child, _index)=>{
                    if(_index == index){
                      return React.cloneElement(child)
                    }
                })}
            </div>
        </div>
    </div>
  )
}