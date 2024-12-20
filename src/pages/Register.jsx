import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebaseConfig";
import { setDoc, doc } from "firebase/firestore";

export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          userName,
          email: user.email
        });
      }

      console.log(user);
      console.log("Register successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">User Name : </label>
        <input type="text" name="" id="userName" />
        <br />
        <label htmlFor="email">Email : </label>
        <input type="email" name="" id="email" />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="password" name="" id="password" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
