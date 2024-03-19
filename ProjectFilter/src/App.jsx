import { useState } from 'react'


import FormInput from "./Component/FormInput/FormInput"
import Dropdown from './Component/Dropdown/Dropdown'
import Checkbox from "./Component/Checkbox/Checkbox"
import "./App.css"

function App() {
  const [value, setValue] = useState({
    username : "" ,
    email : "" ,
    birthday : "" ,
    password : "" ,
    confirmPassword : "" ,
    dropdown : ""
  }) // an array of state variable
  const [selectedOption, setSelectedOption] = useState(null);
  

  const input = [
    {
      id: 1 ,
      name: "username" ,
      type :"text" ,
      placeholder: "Username" ,
      errorMsg :  "Username should be 3-16 characters and shouldn't include any special character!",
      label : "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true

    } ,
    {
      id: 2 ,
      name: "email" ,
      type :"text"  ,
      placeholder: "Email" ,
      errorMsg :  "Enter valid email address!",
      label : "Email",
      pattern :"(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$",
      required: true

    },
    {
      id: 3 ,
      name: "birthday" ,
      type :"date"  ,
      placeholder: "Birthday" ,
      label : "Birthday"

    },
    {
      id: 4 ,
      name: "password" ,
      type :"text"  ,
      placeholder: "Password" ,
      errorMsg :"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label : "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required:true

    },  {
      id: 5 ,
      name: "confirmpassword" ,
      type :"text"  ,
      placeholder: "Confirm Password" ,
      errorMsg :"Passwords don't match!",
      label : "Confirm Password",
      pattern :value.password ,
      required:true

    }
  ]
  const options = ["Dhaka", "Chittagong", "Sylhet", "Faridpur"];
  const checkboxOptions = ["1BHK", "2BHK", "3BHK", "4BHK"];


  const handleOptionChange = (option) => {
      setSelectedOption(option);
  };
  
  const handleSubmit =(e) =>
  {
    e.preventDefault(); 
    // to prevent the page from getting refresh 
  }

  const handleOnChange = (e) =>{
    setValue ({...value , [e.target.name]:e.target.value})
  }
  
  console.log (`values`)
  return (
    
    <div className='app'>
          <form onSubmit={handleSubmit}>
            <h1>Form</h1>
            {input.map((input) =>(
              <FormInput 
              key = {input.id}
              {...input}
              value = {value[input.name]}
              onChange = {handleOnChange} />

            ))}  
           <Dropdown className="dropdown" options={options} onOptionChange={handleOptionChange} />
           <Checkbox className="checkbox" options={checkboxOptions} />
           <button>Submit</button>
          </form>
     </div>
    
  )
}

export default App
