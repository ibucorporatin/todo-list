import React,{useState,useContext,useEffect} from 'react'
import { contxt } from './App';
 

 
const Form = () => {

    const {lists,setlists,edit,setedit}=useContext(contxt)
    const [item, setitem] = useState("");
 
    const formSubmitHandler=(e)=>{
        e.preventDefault()
      if(!edit){
        setlists([
            {
                name:item,
                id: Date.now(),
                isDone:false
            },...lists
           ])
      }else{
       const updatedlist = lists.map((list)=>{
         return edit.id===list.id?{...edit,name:item}:list
       })
       setlists(updatedlist)
       setedit(null)
      }
      setitem("")

        
        }

        
        useEffect(()=>{
         if(edit){
            setitem(edit.name)
         }
        },[edit])
  return (
    <form onSubmit={formSubmitHandler} >
        <input type="text" value={item} onChange={(e)=>setitem(e.target.value)} /> <button>{edit?"update":"add"}</button>
    </form>
  )
}

export default Form