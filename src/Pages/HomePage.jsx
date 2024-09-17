import React from 'react'
import Movies from '../Components/Movies'
import Series from '../Components/Series'
import AddButton from '../Components/AddButton'



const HomePage = () => {
  return (
    <div>
      <AddButton isHome={true}/>
      <Movies isHome={true}/>
      <Series isHome={true}/>
     
    </div>
  )
}

export default HomePage
