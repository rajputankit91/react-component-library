import './Radio.css';

const Radio = ({ value, checked, onChange , children , disabled,className }) => {
  return (
    <label>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={className} 
      />
      <p>{children}</p>
    </label>
  );
};

export default Radio;
