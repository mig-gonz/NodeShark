import React, {useContext, useState, useEffect, useContext} from "react";
import { useNavigate, userParams } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser"


const Wishlist = () => {

    const { currentUser } = useContext(CurrentUser)

    const [wishlist, setWishlist] = useState([])

    const URL = "http://localhost:9000/wishlist"

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.data);
                setWishlist(data.data);
            })
    }, [])
    
    if(!currentUser) {
        return res.status(404).json({
            message: "You must be logged into view wishlist!"
        })
    }

    return (
        <div>
            <h2>Wishlist</h2>
            <div>

            </div>
        </div>
    )
}

export default Wishlist