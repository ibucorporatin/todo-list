import React,{useState,useEffect,createContext} from 'react'
import Form from './Form'
import Header from './Header'
import Lists from './Lists'
import "./app.css"
export const contxt=createContext()
const App = () => {

const [lists, setlists] = useState([]);
const [edit, setedit] = useState(null);

  return (
    <contxt.Provider value={{lists,setlists,edit,setedit}}>
    <div className='container'  >
   <div className='todo' >
     <Header/>
      <Form/>
      <hr/>
      <Lists/>
   </div>
    </div>
    </contxt.Provider>
  )
}

export default App