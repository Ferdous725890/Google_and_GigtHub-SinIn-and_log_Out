import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

import auth from "../../../Firbase.init";
import { useState } from "react";

const LogIn = () => {
    const [user, setUser] = useState(null)
    const googleprovider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()

    const handelGoogleSinIn = () => {
        signInWithPopup(auth, googleprovider)
        .then((result) =>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error=>{
            console.log(error, "error");
            setUser(null)
        })
    }

    const handelsingOut = () =>{
        signOut(auth)
        .then(()=>{
            console.log("sin Out Done");
            setUser(null)
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handelGithubSignIn = () =>{
        signInWithPopup(auth, gitHubProvider)
        .then((result)=>{
            console.log(result.user);
            setUser(result.user)

        })
        .catch((error)=>{
            console.log(error);
        })
    }







    return (
        <div>
            {/* <button onClick={handelGoogleSinIn} >LogIn width Google</button>
            <button onClick={handelsingOut} >Sign Out</button> */}
        {
            user ? <button onClick={handelsingOut} >Sign Out</button>
             :
             <>
             <button onClick={handelGoogleSinIn} >LogIn width Google</button>
             <button onClick={handelGithubSignIn} >Log In width GitHub</button>
             </>
        }

            {
            user && <div>
              <p> {user.displayName}</p>
              <h2>Email : {user.email}</h2>
            </div> 
            }
        </div>
    );
};

export default LogIn;




