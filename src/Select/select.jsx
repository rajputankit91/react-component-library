import './select.css'
import { RxCrossCircled } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci"
import { useState } from 'react';
export default function SelectInput({ onchange, defaultvalue, options, disable, className, variant }) {
    const [currentVariant,setCurrentVariant] = useState(variant);

    let icon = null;
    if (currentVariant === "loading after select") {
        icon = <i className="fa fa-spinner fa-spin" style={{ fontSize: '18px' }}></i>
    } else if (currentVariant === "cross icon") {
        icon = <RxCrossCircled />
    } else if (currentVariant === "primary") {
        icon = <IoIosArrowDown />
    } else if (currentVariant === "select with search") {
        icon = <CiSearch />
    }

    const handleClick = () => {
        if(currentVariant === "primary"){
            setCurrentVariant('select with search')
        } 
    }
    return (
        <>
            <div className='select-container'>
                <div className='wrapper-conatiner'>
                    <select value={defaultvalue} onChange={onchange} disabled={disable} className={className} onClick={handleClick}>
                        {
                            options.map((option) => (
                                <option value={option.value} >{option.label}</option>
                            ))
                        }
                    </select> 
                    {<span className="select-icon">{icon}</span>}
                </div>
            </div>
        </>
    )
} 