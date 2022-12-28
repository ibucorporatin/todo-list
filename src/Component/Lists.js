import React,{useContext} from 'react'
import { contxt } from './App'
import Item from './Item'
import "./app.css"

const Lists = () => {
    const {lists,setlists}=useContext(contxt)
  return (
    <ul className='lists' >
        {
            lists.map(list=>{
            return  <Item key={list.id} list={list}  />
            })
        }
        
    </ul>
  )
}

export default Lists