import { useState } from 'react';
import './App.css';
import Radio from './Components/Radio';

function App() {
  const [value, setValue] = useState(''); 
  const [value1, setValue1] = useState('1');
  const [value2, setValue2] = useState('1');
  const [value3, setValue3] = useState('1');
  const [value4, setValue4] = useState('1');
  const [value5, setValue5] = useState('1');
  const [value6, setValue6] = useState('1');
  const [value7, setValue7] = useState('1');
  const [selected, setSelected] = useState(false);

  const toogleDisable = () => {
    alert('Toggle disabled');
  }

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onChangeVerticalRadio = (e) => {
    setValue1(e.target.value);
    if (e.target.value === '4') {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }

  const handleblockDiv1 = (e) => {
    setValue2(e.target.value);
  }

  const handleblockDiv2 = (e) => {
    setValue3(e.target.value);
  }

  const handleblockDiv3 = (e) => {
    setValue4(e.target.value);
  }

  const handleRadioStyle1 = (e) => {
    setValue5(e.target.value);
  }

  const handleRadioStyle2 = (e) => {
    setValue6(e.target.value);
  }

  const handleRadioStyle3 = (e) => {
    setValue7(e.target.value);
  }

  return (
    <>
      <h1>Examples</h1>
      <div className='radio-main-container'>
        <div className='simpleRadio'>
          <h3>Basic</h3>
          <Radio value="1" checked={value === '1'} onChange={onChange}>Radio</Radio>
        </div>

        <div>
          <h3>Disabled</h3>
          <div className='disablebtnClass'>
            <Radio disabled>Disabled</Radio>
            <Radio disabled>Disabled</Radio>
          </div>
          <button onClick={toogleDisable}>Toggle disabled</button>
        </div>

        <div className='radio-Group-container'>
          <h3>Radio Group</h3>
          <div className='radioGroup' onChange={onChange}>
            <Radio value="1" checked={value === '1'}>A</Radio>
            <Radio value="2" checked={value === '2'}>B</Radio>
            <Radio value="3" checked={value === '3'}>C</Radio>
            <Radio value="4" checked={value === '4'}>D</Radio>
          </div>
        </div>

        <div className='vertical-radio-Group-container'>
          <h3>Vertical Radio.Group</h3>
          <div className='verticalRadioGroup' onChange={onChangeVerticalRadio}>
            <Radio value="1" checked={value1 === '1'}>Option A</Radio>
            <Radio value="2" checked={value1 === '2'}>Option B</Radio>
            <Radio value="3" checked={value1 === '3'}>Option C</Radio>
            <Radio value="4" checked={value1 === '4'}>More</Radio>
            {selected && <input type="text" />}
          </div>
        </div>

        <div>
          <h3>Block Radio.Group</h3>
          <div className="blockRadioDiv1" onChange={handleblockDiv1}>
            <Radio value="1" checked={value2 === '1'}>Apple</Radio>
            <Radio value="2" checked={value2 === '2'}>Pear</Radio>
            <Radio value="3" checked={value2 === '3'}>Orange</Radio>
          </div>

          <div className="blockRadioDiv2" onChange={handleblockDiv2}>
            <Radio value="1" checked={value3 === '1'}>Apple</Radio>
            <Radio value="2" checked={value3 === '2'}>Pear</Radio>
            <Radio value="3" checked={value3 === '3'}>Orange</Radio>
          </div>

          <div className="blockRadioDiv3" onChange={handleblockDiv3}>
            <Radio value="1" checked={value4 === '1'}>Apple</Radio>
            <Radio value="2" checked={value4 === '2'}>Pear</Radio>
            <Radio value="3" checked={value4 === '3'}>Orange</Radio>
          </div>
        </div>

        <div>
          <h3>Radio Style</h3>
          <div className='radioStyleDiv1' onChange={handleRadioStyle1}>
            <Radio value="1" checked={value5 === '1'} >Hangzhou</Radio>
            <Radio value="2" checked={value5 === '2'}>Shanghai</Radio>
            <Radio value="3" checked={value5 === '3'}>Beijing</Radio>
            <Radio value="4" checked={value5 === '4'}>Chengdu</Radio>
          </div>

          <div className='radioStyleDiv2' onChange={handleRadioStyle2}>
            <Radio value="1" checked={value6 === '1'}>Hangzhou</Radio>
            <Radio value="2" checked={value6 === '2'} disabled={true}>Shanghai</Radio>
            <Radio value="3" checked={value6 === '3'}>Beijing</Radio>
            <Radio value="4" checked={value6 === '4'}>Chengdu</Radio>
          </div>

          <div className='radioStyleDiv3' onChange={handleRadioStyle3}>
            <Radio value="1" checked={value7 === '1'}>Hangzhou</Radio>
            <Radio value="2" checked={value7 === '2'}>Shanghai</Radio>
            <Radio value="3" checked={value7 === '3'}>Beijing</Radio>
            <Radio value="4" checked={value7 === '4'}>Chengdu</Radio>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
