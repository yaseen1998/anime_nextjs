import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import Anime from './Anime'
const Main=(props)=> {
    const [anime,setanime]= setState([])
    useEffect(()=>{
        const config = {
            headers:{'Authorization':`Bearer${props.token}`}
        }
        axios.get('http://127.0.0.1:8000/api/v1/add/',config).then(response=>{
            console.log(response.data);
            setanime(response.data)
        })
    },[props.token])
    return (
        <div>
            <h1>hello</h1>
            {
                anime.map((anime,index)=>{
                    return <Anime anime_name={anime.anime_name}/>
                })
            }
        </div>
    )
}
export default Main