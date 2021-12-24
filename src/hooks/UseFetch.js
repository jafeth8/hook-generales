import { useEffect, useRef, useState } from 'react'

export const UseFetch = (url) => {

    const [state, setState] = useState({data:null,loading:true,error:null});

    const isMouted = useRef(true);
    
    useEffect(() => {
        
        return () => {
            isMouted.current=false;
        }
    }, [])

    useEffect(()=>{
        
        //setState({data:null,loading:true,error:null}); // (instruccion para mostrar loading en <MultipleCustomHooks/>)
        setTimeout(() => {

            
            if(isMouted.current){
                fetch(url)
                    .then(resp=>resp.json())
                    .then((data) =>{
                    setState({data,loading:false,error:null})
                });
            }else{
                console.log("no se puede cambiar el estado de un componente no montado")
            }            

        }, 3000);

    },[url])

    return state;
}
