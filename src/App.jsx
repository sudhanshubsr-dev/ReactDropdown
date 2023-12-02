import { useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri";
import './App.css'
function App() {
  const [value, setValue ] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  
  const handleClick = (e) => {
    setValue(e.target.innerText);
    setIsHovered(false);
  }

  return (
   
    <div className="container">
 

    <h1>Should you use a dropDown</h1>
    <div className="selectButtonContainer">
      
        <div className="button">{value ? `${value}`: "Select"}</div>
        <RiArrowDropDownLine onMouseEnter={handleMouseEnter}/>
      
    </div>
    {isHovered && <div className="dropDown">
        <p onClick={handleClick}>Yes</p>
        <p onClick={handleClick}>Probaby Not</p>
      </div>}
   
     <div>

     </div>
      
    </div>
  )
}

export default App
