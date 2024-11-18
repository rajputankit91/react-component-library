import { useState } from 'react'
import './App.css'
import SelectInput from './Select/select'
// import Input from './input/input'

function App() {
  const [value, setValue] = useState('')
  return (
    <>
      {/* <h3>Normal type Input</h3>
      <div className='input-container'>
        <Input placeholder={"Basic usage"} className={"simple-input"} type={"text"} onchange={(e) => setValue(e.target.value)} />
      </div>
      <div className='input-container'>
        <Input placeholder={"Fill your Password"} className={"password-input"} type={"password"} />
      </div>
      <div className='input-container'>
        <Input placeholder={"Fill your Email Id"} className={"email-input"} type={"email"} />
      </div>
      <div className='input-container'>
        <Input placeholder={"Please Enter a Number"} className={"number-input"} type={"number"} />
      </div>
      <div className='twotype-inputContainer'>
        <Input className={"small-input"} /><Input className={"medium-input"} />
      </div>
      <div className='threetype-inputConatiner'>
        <Input type={"search"} className={"inner"} placeholder={"Large-Size"} /> <Input className={"outer"} placeholder={"Another-Size"} />
      </div>

      <div className='threetype-inputConatiner'>
        <Input type={"search"} className={"innersecond-com"} placeholder={"Large-Size"} value={"https://"} /> <Input className={"outersecond-com"} placeholder={"Another-Size"} />
      </div>
      <div className='input-container'>
        <Input type={"spinner"} className={"simple-input"} placeholder={"input Search Loading default"} />
      </div>
      <div className='inputSpinnerbtn-container'>
        <Input type={"spinnerbutton"} className={"simple-input"} placeholder={"input Search Loading default"} />
      </div>

      <div className='inputSpinner-container'>
        <Input type={'spinnerButtonText'} placeholder={"Search....."} />
      </div>

      <div className='btnsearch'>
        <Input type={"searchbtn"} placeholder={"Search"} />
      </div>

      <div className='mictype-conatiner'>
        <Input type={"mic"} placeholder={"Search with Mic"} />
      </div>

      <div className='passwordIcon-container'>
        <Input type={"passwordIcon"} placeholder={"Input Password"} />
      </div>

      <div className='showpassword-container'>
        <Input type={"showPassword"} placeholder={"Fill YOUR PASSWORD"} />
      </div>

      <div className='input-containerOpt'>
        <Input width={"30px"} />
        <Input width={"30px"} />
        <Input width={"30px"} />
        <Input width={"30px"} />
        <Input width={"30px"} />
        <Input width={"30px"} />
      </div>

      <div className='error'>
        <Input className={"error-show"} placeholder={"Error"} />
      </div>
      <div className='warning'>
        <Input className={"warning-show"} placeholder={"Warning"} />
      </div>
  
      <p>{value}</p> */}

      <SelectInput />
    </>
  )
}

export default App
