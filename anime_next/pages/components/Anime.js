import React from 'react'

const Anime=(props)=> {
    return (
        <div>
            <h1>{props.anime_name}</h1>
            <h1>{props.anime_desc}</h1>
            <h1>{props.anime_country}</h1>
        </div>
    )
}
export default Anime
