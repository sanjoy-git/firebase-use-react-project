import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

export default function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    let email = document.getElementById("userEmail").value;
    let password = document.getElementById("userPassword").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);

      auth.onAuthStateChanged(async (user) => {
        console.log(user);

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log(docSnap.data());
        } else {
          console.log("User is not login");
        }
      });

      console.log("Login successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userEmail">Email : </label>
        <input type="email" name="" id="userEmail" />
        <br />
        <label htmlFor="userPassword">Password : </label>
        <input type="password" name="" id="userPassword" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
