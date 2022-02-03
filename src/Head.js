import { useEffect } from "react"

export function Head(props){

    useEffect(()=>{
        document.title = 'Rotas | ' + props.title
        console.log(props)
    }, [props])

    return <></>
};