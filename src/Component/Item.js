import React,{useContext,useState} from 'react'
import { contxt } from './App'

const Item = ({list}) => {

    const {lists,setlists,setedit}=useContext(contxt)
    const deletelist=({id})=>{
   setlists(
    lists.filter((list)=>{
        return list.id !== id
     })
   )
    }
    const editlist=(list)=>{
     setedit(list)
    }
    const isDoneFunction=(isdonelist)=>{
      const updatedlist = lists.map((list)=>{
        return isdonelist.id===list.id?{...isdonelist,isDone:!list.isDone}:list
      })
      setlists(updatedlist)
     }

  return (
   <div style={{display:"flex",alignItem:"center"}} >
     <li> <span><input type="checkbox" onClick={()=>isDoneFunction(list)} /></span> <span style={{ textDecoration:list.isDone?"line-through":""  }} >{list.name}</span></li><span><button onClick={()=>(deletelist(list))} >delete</button><button onClick={()=>(editlist(list))}>edit</button></span>
   </div>
  )
}

export default Item