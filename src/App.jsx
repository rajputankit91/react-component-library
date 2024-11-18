import { useState } from 'react'
import './App.css'
import Image from './image component/Image'

function App() {

  return (
    <>
      <Image
        src="https://png.pngtree.com/thumb_back/fh260/background/20240327/pngtree-3d-hindu-god-ganpati-image-with-green-nature-background-image_15695930.jpg"
        alt="Example"
        variant="rounded"
        zoom={true}
      />

    </>
  )
}

export default App
