import { useRef, useState, useEffect } from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from './api/axios';


const USER_REGEX = /^[a-zA-Z][a-zA-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=,*[a-z])(?=,*[A-Z])(?=,*[0-9])(?=,*[!@#$%]),{8,24}$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    // React States
    const [user, setUser] = useState('');
    const [validName, setvalidName] = useState(false);
    const [userfocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setvalidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setvalidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        setvalidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setvalidPwd(result);
        const match = pwd === matchPwd;
        setvalidMatch(match);
    }, [pwd,matchPwd])

    useEffect(() => {
        setErrorMsg('');
    }, [user, pwd, matchPwd])


     return (
        <section>
          {/* <p ref={errRef} className={errorMsg ? "errmsg :"Offscreen"} aria-live="assertive">{errMsg}</p> */}
          <h1>Register</h1>
          <form>
             <label htmlFor="username">
                username:
             </label>
             <input
               type="text"
               id="username"
               ref={userRef}
               autoComplete="off"
               onChange={(e) => setUser(e.target.value)}
               required
               aria-invalid={validName ? "false" : "true"}
               aria-describedby="uidnote"
               onFocus={() => setUserFocus(true)}
               onBlur={() => setUserFocus(false)}
             />
             <p id="uidnote" className={userfocus && user && !validName ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon ={faInfoCircle}/>
                4 to 24 characters.<br/>
                Must begin with a letter.<br/>
             </p>

          </form>
        </section>
     )


}


export default Register