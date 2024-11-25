import './App.css'
import Button from './Components/button'
import { IoIosSearch } from "react-icons/io";
import { FaSpinner } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";


function App() {

  const handleButton = () => {
    confirm('This is my libary button');
  }

  return (
    <div className='button-main-container'>
      <div>
        <h3>Example Of Button</h3>
        <div className='Examplebutton'>
          <Button className="Default" variant='default'>Default Button</Button>
          <Button className="Primary" variant="primary">Primary Button</Button>
          <Button className="dashed" variant='dashed'>Dashed Button</Button>
          <Button className="text" variant='text'>Text Button</Button>
          <Button className="link" variant='link'>Link Button</Button>
        </div>
      </div>

      <div>
        <h3>Button Event</h3>
        <Button className="Default" type='default' onClick={handleButton}>Click Button</Button>
      </div>

      <div>
        <h3>Button with Color</h3>
        <div className='exampleBtnWithColor'>
          <Button className="solid" variant='solid'>Solid</Button>
          <Button className="outlined" type='outlined'>Outlined</Button>
          <Button className="dashed" type='dashed'>Dashed</Button>
          <Button className="filled" type='filled'>Filled</Button>
          <Button className="text" type='text'>Text</Button>
          <Button className="link" type='link'>Link</Button>
        </div>
        <div className='exampleBtnWithColor'>
          <Button className="solid-1" variant="primary">Solid</Button>
          <Button className="outlined-1" type='outlined'>Outlined</Button>
          <Button className="dashed-1" type='dashed'>Dashed</Button>
          <Button className="filled-1" type='filled'>Filled</Button>
          <Button className="text-1" type='text'>Text</Button>
          <Button className="link-1" type='link'>Link</Button>
        </div>
        <div className='exampleBtnWithColor'>
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
          <Button className="search1" icon={<IoIosSearch />} type="search">Search</Button>
          <Button className="search2" icon={<IoIosSearch />} type="search"></Button>
          <Button className="search3" icon={<IoIosSearch />} type="search" >Search</Button>
          <Button className="search4" icon={<IoIosSearch />} type="search">Search</Button>
          <Button className="search5" icon={<IoIosSearch />} type="search"></Button>
          <Button className="search6" icon={<IoIosSearch />} type="search">Search</Button>
        </div>
      </div>

      <div>
        <h3>Button With Positions Icon</h3>
        <div className="buttonIcons">
          <Button className="search" type="search" icon={<IoIosSearch />} />
          <Button className="A" type="primary">A</Button>
          <Button className="search1" icon={<IoIosSearch />} type="searchBack">Search</Button>
          <Button className="search2" icon={<IoIosSearch />} type="searchBack" />
          <Button className="search3" icon={<IoIosSearch />} type="searchBack">Search</Button>
          <Button className="search4" icon={<IoIosSearch />} type="searchBack" >Search</Button>
          <Button className="search5" icon={<IoIosSearch />} type="searchBack" />
          <Button className="search6" icon={<IoIosSearch />} type="searchBack">Search</Button>
        </div>
      </div>


      <div>
        <h3>Button with Loading Icon</h3>
        <div>
          <Button className="search3" type="searchBack" icon={<FaSpinner />}>Loading</Button>
        </div>
      </div>

      <div>
        <h3>Button with Downloading</h3>
        <div className='btnDownLoad'>
          <Button className="search" type="search" icon={<MdOutlineFileDownload />} />
          <Button type="search" icon={<MdOutlineFileDownload />} />
          <Button type="search" icon={<MdOutlineFileDownload />} />
          <Button type="search" icon={<MdOutlineFileDownload />}>
            Download
          </Button>
          <Button className="search1 " type="search" icon={<MdOutlineFileDownload />}>
            Download
          </Button>
        </div>
      </div>

      <div>
        <h3>Button with Disable</h3>
        <div className='btnDisable'>
          <Button className="search3" disabled={true}>Hello</Button>
        </div>
      </div>

    </div>
  )
}

export default App


