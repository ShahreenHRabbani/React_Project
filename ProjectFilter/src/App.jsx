import { useState } from "react";

import FormInput from "./Component/FormInput/FormInput";
import Dropdown from "./Component/Dropdown/Dropdown";
import Checkbox from "./Component/Checkbox/Checkbox";
import "./App.css";

function App() {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    dropdown: "", // Initialize dropdown value
    checkboxes: [], // Initialize checkboxes array
  }); // an array of state variable

  const input = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    },
    {
      id: 5,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      pattern: formData.password,
      required: true,
    },
  ];
  const dropdownOptionList = ["Dhaka", "Chittagong", "Sylhet", "Faridpur"];
  const checkboxOptionList = ["1BHK", "2BHK", "3BHK", "4BHK"];

  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent the page from getting refresh
    console.log(formData);
  };

 const handleOnChange = (e) => {
  //  const { name, value } = e.target;
   // For dropdown
   console.log(e.target.name, e.target.value);
   if (e.target.name === "dropdown") {
     setformData({ ...formData, [e.target.name]: e.target.value });
   }
   else if (e.target.name === "checkboxes") {
     // For checkboxes
     const { checked, id } = e.target;
     if (checked) {
       setformData({ ...formData, checkboxes: [...formData.checkboxes, id] });
     }
     else {
       setformData({
         ...formData,
         checkboxes: formData.checkboxes.filter((checkbox) => checkbox !== id),
       });
     }
   }
   else {
     setformData({ ...formData, [e.target.name]: e.target.value });
   }
   console.log (formData)
 };

  // console.log (`values`)
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        {input.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={formData[input.name]}
            onChange={handleOnChange}
          />
        ))}
        <Dropdown
          className="dropdown"
          name="dropdown"
          dropdownOptions={dropdownOptionList}
          onChange={handleOnChange}
        />
        <Checkbox
          className="checkbox"
          name="checkboxes"
          checkboxOptions={checkboxOptionList}
          onChange={handleOnChange}
        />
        <button onChange={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
