import "./app.css"
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
     <li className="list" >
      <span>
        <span><input type="checkbox" onClick={()=>isDoneFunction(list)} /></span> <span  className="listItem"  style={{ textDecoration:list.isDone?"line-through":""  }} >{list.name}</span>
        </span>
         <span className="buttonContainer" > 
         <span><button className="button" onClick={()=>(deletelist(list))} >Delete</button><button className="button" onClick={()=>(editlist(list))}>Edit</button>
         </span>
        </span></li>
   </div>
  )
}

export default Item