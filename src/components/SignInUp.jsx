// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import Button from "../layouts/Button";
// //import AWS from 'aws-sdk';

// const SignInUp = () => {

//   // const dynamoDB = new AWS.DynamoDB.DocumentClient();

//   const backgroundColor = `bg-brightColor`;

//   const [action, setAction] = useState("Sign In");

//   // const [loginData, setLoginData] = useState({
//   //   email: '',
//   //   password: '',
//   // });

//     // const handleLoginChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setAction("Sign In");
//   //   setLoginData((prevData) => ({
//   //     ...prevData,
//   //     [name]: value,
//   //   }));
//   // };

//     // const handleLoginSubmit = (e) => {

//   const [registerData, setRegisterData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//   });

//   // const handleRegister = async () => {
//   //   try {
//   //     // Send registration data to DynamoDB
//   //     const params = {
//   //       TableName: 'YourDynamoDBTableName',
//   //       Item: userData,
//   //     };
//   //     await dynamoDB.put(params).promise();
//   //     console.log('User registered successfully!');
//   //   } catch (error) {
//   //     console.error('Error registering user:', error);
//   //   }
//   // };

//   const handleRegisterChange = (e) => {
//     const { name, value } = e.target;
//     setRegisterData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   //   e.preventDefault();
//   //   // Add your login logic here
//   //   console.log('Login Data:', loginData);
//   // };

//   // const handleRegisterSubmit = (e) => {
//   //   e.preventDefault();
//   //   // Add your registration logic here
//   //   console.log('Register Data:', registerData);
//   // };

//   return (
//     <div className = "contact-container">
//       <div className = "contact-content">
//         <form className = "contact-form">
//           <h1 className = "contact-h1">{action}</h1>
//           <div className = "details">
//             {action === "Sign In"?<div></div>:<><label htmlFor = "userName"> Full Name </label><input className = "inputs" type = "text" name = "userName" id = "userName" placeholder = "Enter your name" value = {registerData.name} onChange = {handleRegisterChange} required /></>}
//           </div>
//           <div className = "details">
//             <label htmlFor = "userEmail"> Email </label>
//             <input className = "inputs" type = "email" name = "userEmail" id = "userEmail" placeholder = "Enter your email" value = {registerData.email} onChange = {handleRegisterChange} required/>
//           </div>
//           <div className = "details">
//             {action === "Sign In"?<div></div>:<><label htmlFor = "userPhone"> Phone No. </label>
//             <input className = "inputs" type = "tel" name = "phone" id = "userPhone" placeholder = "Enter your mobile number" value = {registerData.phone} onChange = {handleRegisterChange} required/></>}
//             {/* {!isValid && <p style={{ color: 'red' }}>Please enter a valid phone number (10 digits).</p>} */}
//           </div>
//           <div className = "details">
//             <label htmlFor = "userPass"> Password </label>
//             <input className = "inputs" type = "password" name = "password" id = "userPass" placeholder = "Enter your password" value = {registerData.password} onChange = {handleRegisterChange} required/>
//           </div>
//           <div className = "forgot-password">
//             {action === "Sign In"?<div></div>:<>Forgot Password? <span className="click-here"> Click here! </span></>}
//           </div>
//           <div className = "submit-details">
//             <Button className = {action === "Sign In"?"submit gray":"submit"} onClick = {() => {setAction("Sign In")}} title = "Sign Up" backgroundColor = {backgroundColor} />
//             <Button className = {action === "Sign Up"?"submit gray":"submit"} onClick = {() => {setAction("Sign Up")}} title = "Sign In" backgroundColor = {backgroundColor} />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignInUp;