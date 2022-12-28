import "./app.css"
import React, { useState, useContext, useEffect } from 'react'
import { contxt } from './App';



const Form = () => {

  const { lists, setlists, edit, setedit } = useContext(contxt)
  const [item, setitem] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault()
if(item===""){
  setErrorMessage("fill the todo")
}else{
  if (!edit) {
    setErrorMessage("")
    setlists([
      {
        name: item,
        id: Date.now(),
        isDone: false
      }, ...lists
    ])
  }
  else {
    setErrorMessage("")
    const updatedlist = lists.map((list) => {
      return edit.id === list.id ? { ...edit, name: item } : list
    })
    setlists(updatedlist)
    setedit(null)
  }
  setitem("")
}


  }


  useEffect(() => {
    if (edit) {
      setitem(edit.name)
    }
  }, [edit])
  return (
    <form className="form" onSubmit={formSubmitHandler} >
      <input placeholder={errorMessage?errorMessage:""} className="input" type="text" value={item} onChange={(e) => setitem(e.target.value)} /> <button className="add" >{edit ? "Update" : "Add"}</button>
    </form>
  )
}

export default Form