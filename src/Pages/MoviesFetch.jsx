import React from 'react'
import AddButton from '../Components/AddButton'
import Movies from '../Components/Movies'

const MoviesFetch = () => {
  return (
    <div>
      <AddButton isHome={false}/>
      <Movies/>
    </div>
  )
}

export default MoviesFetch
