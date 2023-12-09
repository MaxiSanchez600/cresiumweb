// LanguageSelector.js
import useLanguageSwitch from "../hooks/useLanguageSwith";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const options = [
  {value: 'en', label: 'English'},
  {value: 'es', label: 'Spanish'}
];
const defaultOption = options[0];
const LanguageSelector = () => {
    // eslint-disable-next-line no-unused-vars
    const {handleselectlanguage}=useLanguageSwitch()
  
  return (
    <div className="relative inline-flex">
        <Dropdown
        className=" rounded-lg"  options={options} onChange={handleselectlanguage} value={defaultOption} placeholder="Select an option" />
      
    </div>
  );
};

export default LanguageSelector;
