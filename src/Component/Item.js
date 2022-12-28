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
   
     <li className="list" >
      <span style={{display:"flex"}} >
        <span><input type="checkbox" onClick={()=>isDoneFunction(list)} /></span> <div className={`listItem ${list.isDone?"done":""}`}  >{list.name}</div>
        </span>
         <span className="buttonContainer" > 
         <span><button className="button" onClick={()=>(deletelist(list))} >Delete</button><button className="button" onClick={()=>(editlist(list))}>Edit</button>
         </span>
        </span></li>
  
  )
}

export default Item