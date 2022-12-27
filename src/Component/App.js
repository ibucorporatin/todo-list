import React,{useState,useEffect,createContext} from 'react'
import Form from './Form'
import Header from './Header'
import Lists from './Lists'
import "./app.css"
export const contxt=createContext()
const App = () => {
  // const initialState=JSON.parse(localStorage.getItem("todos")) || []
const [lists, setlists] = useState([]);
const [edit, setedit] = useState(null);
// useEffect(()=>{
// localStorage.setItem("todos",JSON.stringify(lists))
// },[lists])
  return (
    <contxt.Provider value={{lists,setlists,edit,setedit}}>
    <div className='container'  >
   <div className='todo' >
   <Header/>
      <Form/>
      <Lists/>
   </div>
    </div>
    </contxt.Provider>
  )
}

export default App