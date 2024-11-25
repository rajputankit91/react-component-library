import { useState } from 'react'
import './App.css'
import SelectInput from './Select/select'

function App() {
  const [isopen,setIsopen] = useState(false)
  const [selectValue, setSelectValue] = useState('');

  const handleChange = (e) => {
    setSelectValue(e.target.value)
  }

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  return (
    <>
        <h3>Select Option</h3>
        <SelectInput defaultvalue={selectValue} options={options} onchange={handleChange} variant={'primary'}/>

        <h3>Select Option with Disable mode</h3>
        <SelectInput  options={options} onchange={handleChange} disable={true} variant={"primary"}/>

        <h3>Select Option with Loading Icon</h3>
        <SelectInput defaultvalue={selectValue} options={options} onchange={handleChange} variant = "loading after select"/>

        <h3>Select Option with Cross Icon</h3>
        <div>
        <SelectInput variant={"cross icon"} options={[{value:"first",label:"Name"},{value:"second",label:"Class"}]} defaultvalue={"Yes"} />
        </div>
        <h3>Select option with Search Icon</h3>
        <div>
          <SelectInput variant={"primary"} options={[{value:"One",label:"One"},{value:"thrid",label:"Thrid"}]}/>
        </div>
    </>
  )
}

export default App
