import React from 'react'

export const useResponsive=(breakPoint: number)=>{
    const [isResponsive, setResponsive] = React.useState(false)

    React.useEffect(()=>{
        window.addEventListener("load",size)
        window.addEventListener("resize",size)
        return () =>{
          window.removeEventListener("load",size)
          window.removeEventListener("resize",size)
        }
    },[])


    const size=()=>{
        setResponsive(window.innerWidth <= breakPoint)
    }

    return isResponsive
}