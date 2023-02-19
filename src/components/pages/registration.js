import React, {useState} from 'react';
import './form.css';

// import {database} from '../firebase'
// import {ref,push,child,update} from "firebase/database";
   

function RegistrationForm() {
// 	const [userName, setUserName] = useState(null);
//     const [email, setEmail] = useState(null);
//     const [password,setPassword] = useState(null);
//     const [confirmPassword,setConfirmPassword] = useState(null);
	
// 	const handleInputChange = (e) => {
//         const {id , value} = e.target;
        
//         if(id === "userName"){
//             setUserName(value);
//         }
//         if(id === "email"){
//             setEmail(value);
//         }
//         if(id === "password"){
//             setPassword(value);
//         }
//         if(id === "confirmPassword"){
//             setConfirmPassword(value);
//         }

//     }
// 	const handleSubmit  = () => {
// 		let obj = {
//             userName : userName,
//             email:email,
//             password:password,
//             confirmPassword:confirmPassword,
//         }       
//     const newPostKey = push(child(ref(database), 'posts')).key;
//     const updates = {};
//     updates['/' + newPostKey] = obj
//     return update(ref(database), updates);
// 	console.log(userName,email,password,confirmPassword);
// }
        
// value={userName}  onChange = {(e) => handleInputChange(e)}
// value={email}  onChange = {(e) => handleInputChange(e)}
// value={password} onChange = {(e) => handleInputChange(e)}
// onClick={()=>handleSubmit()}
    return(
      <div className='skull'>
        <div class="main1">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div class="signup">
                            <form >
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="rn"  placeholder="User name" required />
					<input type="email"  name="rm"  placeholder="Email" required />
					<input type="password" name="rp"  placeholder="Password" required />
					<button className='h1'  type='submit' >Sign up</button>
				</form>
			</div>

			<div class="login">
				<form >
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="lm" placeholder="Email" required />
					<input type="password" name="lp" placeholder="Password" required />
					<button className='h1'>Login</button>
				</form>
			</div>
	</div>
    </div>
   
    )       
}
export default RegistrationForm;