import './App.css'
import Button from './Components/button'
import { IoIosSearch } from "react-icons/io";


function App() {

  const handleButton = () => {
    confirm('This is my libary button');
  }

  return (
    <div className='button-main-container'>
      <div className='div1'>
        <h3>Example Of Button</h3>
        <Button className="Default" type="default">Default Button</Button>
        <Button className="Primary" type="primary">Primary Button</Button>
        <Button className="dashed" type='dashed'>Dashed Button</Button>
        <Button className="text" type='text'>Text Button</Button>
        <Button className="link" type='link'>Link Button</Button>
      </div>
      
      <div>
        <h3>Button Event</h3>
        <Button className="Default" type='default' onClick={handleButton}>Click Button</Button>
      </div>
      <div>
        <h3>Button with Color</h3>
        <div>
          <Button className="solid" type='primary'>Solid</Button>
          <Button className="outlined" type='outlined'>Outlined</Button>
          <Button className="dashed" type='dashed'>Dashed</Button>
          <Button className="filled" type='filled'>Filled</Button>
          <Button className="text" type='text'>Text</Button>
          <Button className="link" type='link'>Link</Button>
        </div>
        <div>
          <Button className="solid-1" type='primary'>Solid</Button>
          <Button className="outlined-1" type='outlined'>Outlined</Button>
          <Button className="dashed-1" type='dashed'>Dashed</Button>
          <Button className="filled-1" type='filled'>Filled</Button>
          <Button className="text-1" type='text'>Text</Button>
          <Button className="link-1" type='link'>Link</Button>
        </div>
        <div>
          <Button className="solid-2" type='primary'>Solid</Button>
          <Button className="outlined-2" type='outlined'>Outlined</Button>
          <Button className="dashed-2" type='dashed'>Dashed</Button>
          <Button className="filled-2" type='filled'>Filled</Button>
          <Button className="text-2" type='text'>Text</Button>
          <Button className="link-2" type='link'>Link</Button>
        </div>
      </div>

      <div>
        <h3>Button With Icon</h3>
        <div className='buttonIcons'>
          <Button className="search" type="search" icon={<IoIosSearch />}></Button>
          <Button className="A" type="primary">A</Button>
          <Button icon={<IoIosSearch />} type="search"  >Search</Button>
          <Button icon={<IoIosSearch />} type="search"></Button>
          <Button icon={<IoIosSearch />} type="search">Search</Button>
          <Button icon={<IoIosSearch />} type="search"></Button>
          <Button icon={<IoIosSearch />} type="search">Search</Button>
          <Button icon={<IoIosSearch />} type="search"></Button>
          <Button icon={<IoIosSearch />} type="search">Search</Button>
          <Button icon={<IoIosSearch />} type="search"></Button>
        </div>
      </div>

      <div>
        <h3>Button With Positions Icon</h3>
        <div className='buttonIcons'>
          <Button className="search" type="search" icon={<IoIosSearch />}></Button>
          <Button className="A" type="primary">A</Button>
          <Button icon={<IoIosSearch />} type="searchBack" >Search</Button>
          <Button icon={<IoIosSearch />} type="searchBack" ></Button>
          <Button icon={<IoIosSearch />} type="searchBack" >Search</Button>
          <Button icon={<IoIosSearch />} type="searchBack" ></Button>
          <Button icon={<IoIosSearch />} type="searchBack" >Search</Button>
          <Button icon={<IoIosSearch />} type="searchBack" ></Button>
          <Button icon={<IoIosSearch />} type="searchBack" >Search</Button>
          <Button icon={<IoIosSearch />} type="searchBack" ></Button>
        </div>
      </div>


    </div>
  )
}

export default App


