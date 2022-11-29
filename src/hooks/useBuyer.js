import { useEffect, useState } from "react"

const useBuyer = (email) => {
    const [isBuyer, setisBuyer] = useState(true);
    const [isBuyerLoading, setisBuyerLoading] = useState(true);
    useEffect( () => {
        if(email){
            fetch(`http://localhost:5000/users/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setisBuyer(data.isBuyer);
                setisBuyerLoading(false);
            })
        }
    } , [email])
    return [isBuyer, isBuyerLoading];
}

export default useBuyer;