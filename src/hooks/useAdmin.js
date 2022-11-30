import { useEffect, useState } from "react"

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(true);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect( () => {
        if(email){
            fetch(`https://buro-autos-serv-eftinur.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsAdmin(data.isAdmin);
                setIsAdminLoading(false);
            })
        }
    } , [email])
    return [isAdmin, isAdminLoading];
}

export default useAdmin;