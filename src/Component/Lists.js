import React,{useContext} from 'react'
import { contxt } from './App'
import Item from './Item'

const Lists = () => {
    const {lists,setlists}=useContext(contxt)
  return (
    <ul>
        {
            lists.map(list=>{
            return  <Item key={list.id} list={list} />
            })
        }
        
    </ul>
  )
}

export default Lists