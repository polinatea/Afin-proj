import React, {useState,useEffect} from 'react'

export const NotesListPage = () => {

//updating state
    let [notes,setNotes] = useState([])
    useEffect(()=>{
        // calling get notes
        getNotes()
    },[])

    let getNotes = async() =>{
        // getting notes
       let response = await fetch('http://127.0.0.1:8000/api/notes/')
       let data = await response.json()
       console.log('DATA: ', data)
       setNotes(data)

    }


    // CORS error -  we are running our app on different ports
    // react is trying to make a request to djabgo
    // django doesnt know who react is and is blocking it
    // fix: specifying list of urls that allowed to call our api or allow all
    // django-cors-headers
    // https://github.com/adamchainz/django-cors-headers
    // python -m pip install django-cors-headers
  return (
    <div>
        <div className="notes-list">
          {notes.map((note,index)=>(
            //rendering data
            <div><h2>{note.body}</h2><p>{note.created}</p></div>
            
          ))}
        </div>
    </div>

  )
}
export default NotesListPage