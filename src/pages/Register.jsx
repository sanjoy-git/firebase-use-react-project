import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

export default function Register() {

  const handleSubmit = async(e)=>{
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    try {
      await createUserWithEmailAndPassword(auth,email,password);
      const user = auth.currentUser;
      console.log(user);
      console.log("Register successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="" id="email" />
        <br />
        <input type="text" name="" id="password" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
