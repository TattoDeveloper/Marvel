import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useResponsive } from '../../../hooks/useResposive';
import style from './header.module.css';
export interface HeaderProps{
   logo?: string;
   menu: Array<any>
}


const DesktopMenu: React.FunctionComponent<HeaderProps> = ( {menu}: HeaderProps) => (
   <nav className={style.menuDesktop}>
      <ul className={style.menuList}>
         {
            menu.map((element, index)=> {
               const path = index === 0 ? '/' : `/character/${element.id}`
               return<NavLink to={path} activeClassName={style.menuActive}><li key={element.id}>{element.name}</li></NavLink>
            })
         }
      </ul>
   </nav>
)

const MovilepMenu: React.FunctionComponent<HeaderProps> = ( {menu}: HeaderProps) => {

   const [isModalOpen, setModalOpen] = React.useState(false)

   const toggleModal= () =>{
      if(isModalOpen){
         setModalOpen(false)
         return
      }
      setModalOpen(true)
   }
   
   return(
      <>
      <div  
        onClick={toggleModal}
        className={`${style.movileMenuButton} ${isModalOpen ? style.buttonOpen: ''}`}>
         <div></div>
         <div></div>
         <div></div>
      </div>
       <div className={`${style.movileMenu} ${isModalOpen ? style.modalOpen: ''}`}>
         <nav>
            <ul className={style.menuListMovile}>
               {
                  menu.map((element, index)=> {
                     const path = index === 0 ? '/' : `/character/${element.id}`
                     return<NavLink to={path} activeClassName={style.menuActive} onClick={toggleModal}>
                        <li key={element.id}>{element.name}</li>
                     </NavLink>
                  })
               }
            </ul>
         </nav>
      </div>
      </>
   )
}

export const Header: React.FunctionComponent<HeaderProps> = ( { logo, menu }: HeaderProps )=>{
    
   const isResponsive = useResponsive(768);

   return(
      <header className={style.header}>
         <div className="guide">
            <Link to="/"><img  src={logo} alt=""/></Link>
            {!isResponsive ? 
             (<DesktopMenu menu={menu}/>) :
             (<MovilepMenu menu={menu}/>)
            }
         </div>
      </header>
   )
}