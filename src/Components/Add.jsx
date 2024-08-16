import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const [image,setImage]=useState('');
    const [country,setCountry]=useState('');
    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');
    const [year,setYear]=useState('');
    const [type,setType]=useState('');
    const [genre,setGenre]=useState('');
    
    const navigate=useNavigate()
  return (
    <div>
        <form action=""><div><img src="" alt="" /></div><div>
           
            <label htmlFor="">
                <p>Movies/Series name</p>
            <input type="Movies/Series name" />
            </label>
            <label htmlFor="">
                <p>Movies/Series description</p>
            <input type="Description" />
            </label>
            <label htmlFor="">
                <p>Select country</p>
            <input type="Country" />
            </label>
            <label htmlFor="">
                <p></p>
            <input type="Year" />
            </label>
        
            </div></form>
      
    </div>
  )
}

export default Add
