import Head from 'next/head'
import Main from './components/Main'
import axios from 'axios'
import { useState } from 'react'
const backurl = 'http://127.0.0.1:8000/'
const token = `${backurl}api/token/`
export default function Home() {
  const [token,setoken] = useState('')
  const [refresh,serefresh] = useState('')
  const LogIn = async()=>{
    const config = {
      username :'yaseen',
      password:'ya9981063722'
    }
    const authtoken = await axios.post('http://127.0.0.1:8000/api/token/',config)
    setoken(authtoken.data.access)
    serefresh(authtoken.data.refresh)
  }
  if(!token){
    return(
      <>
      <button onClick={LogIn}>login</button>
      
      </>
    )
  }
  return (
    <div>
      <Main token ={token} refresh = {refresh}/>
    </div>
  )
}
