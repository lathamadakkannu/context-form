import React,{useContext} from "react";
import { LoginContext } from "./LoginContext";

function Home(){
const{username,price,quantity,descrip}=useContext(LoginContext)

    return(
        <div className="home-page">
            <h2>PRODUCT DETAILS</h2>

            <img src="image/img.jpg" alt=""/>
            <h3>Product Name : {username}</h3>
            <h3>Price : {price}</h3>
            <h3>Quantity : {quantity}</h3>
            <h3>Description : {descrip}</h3>
        </div>
    )
}
export default Home;