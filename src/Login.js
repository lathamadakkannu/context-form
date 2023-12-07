import React,{useState,useContext} from "react"
import { LoginContext } from "./LoginContext";

function Login(){

    const{setUsername,setPrice,setQuantity,setDescrip,setShowprofile}=useContext(LoginContext)
    

    return(
        <div>
            <section className="login-form">
                <div className="container">
                    <form className="form-design">
                        <div className="design">
                            <input type="text" placeholder="Enter Product Name" 
                             onChange={(e)=>{
                                 setUsername(e.target.value)
                                
                             }}
                            />
                        </div>

                        <div className="design">
                            <input type="text" placeholder="Enter Product Price" 
                             onChange={(e)=>{
                                 setPrice(e.target.value)
                                
                             }}
                            />
                        </div>

                        <div className="design">
                            <input type="text" placeholder="Enter Product Quantity" 
                             onChange={(e)=>{
                                 setQuantity(e.target.value)
                                
                             }}
                            />
                        </div>

                        <div className="design">
                            <input type="text" placeholder="Enter Your Product Description" 
                             onChange={(e)=>{
                                setDescrip(e.target.value)
                               
                             }}
                            />
                        </div>

                        <button 
                        onClick={()=>{
                           setShowprofile(true)
                         }} 
                        type="submit">SUBMIT</button>

                       
                    </form>
                </div>
            </section>
            
        </div>
    )
}

export default Login;