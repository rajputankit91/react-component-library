import './select.css'
export default function SelectInput({label,onchange,defaultvalue,options,disable,className}){
    return(
        <>
            <label>{label}</label>
            <select value={defaultvalue} onChange={onchange} disabled={disable} className={className}>
                {
                    options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </>
    )
}