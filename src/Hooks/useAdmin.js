import { useEffect, useState } from 'react';

const useUserRole = email => {
    const [adminUser, setAdminUser] = useState(null);
    const [loadingRole, setLoadingRole] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://medlife-server-devshowmik.vercel.app/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    setAdminUser(data?.admin);
                    setLoadingRole(false)
                })
        }
    }, [email])
    return [adminUser, loadingRole]
};

export default useUserRole;