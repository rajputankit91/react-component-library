import { useState } from 'react'
import './App.css'
import Image from './image component/Image'
import ImageComponent from './image component/Image'

function App() {

  return (
    <>
      <ImageComponent
        src="https://png.pngtree.com/thumb_back/fh260/background/20240327/pngtree-3d-hindu-god-ganpati-image-with-green-nature-background-image_15695930.jpg"
        alt="Example"
        variant="circle"
        zoom={true}
      />

    </>
  )
}

export default App
