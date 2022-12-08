import { createContext,useState,useEffect} from "react";
import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) =>{
    let [user,setUser] = useState(null)
    let [authTokens, setAuthTokens]=useState(null)
  
    let loginUser = async (e)=>{
        e.preventDefault()
        // console.log('form submitted');
        let response = fetch('http://127.0.0.1:8000/api/token/',{
            method:'POST',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value,'password':e.target.password.value})
        })
        let data= await response.json()
        if (response.status == 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens',JSON.stringify(data))
            Navigate('/');
        }else{
            alert('something went wrong')
        }
    }
    let contextData={
        user:user,
        loginUser:loginUser
    }
    return(
<AuthContext.Provider value={contextData}>
    {children}
</AuthContext.Provider>
    )
}