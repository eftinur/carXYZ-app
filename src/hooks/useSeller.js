import { useEffect, useState } from "react"

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(true);
    const [isSellerLoading, setisSellerLoading] = useState(true);
    useEffect( () => {
        if(email){
            fetch(`https://buro-autos-serv-eftinur.vercel.app/users/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsSeller(data.isSeller);
                setisSellerLoading(false);
            })
        }
    } , [email])
    return [isSeller, isSellerLoading];
}

export default useSeller;