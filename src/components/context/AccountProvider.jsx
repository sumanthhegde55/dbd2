import {createContext,useState} from 'react'

export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {
    let user = {
            f_name : res.profileObj.givenName,
            l_name : res.profileObj.familyName,
            e_mail : res.profileObj.email,
            image : res.profileObj.imageUrl,
    }
    
    const [account,setAccount] = useState(user);
    const [openSignup,setOpenSignup] = useState(false);
    const [openLogin,setOpenLogin] = useState(false);
    const [profile,setProfile] = useState(false);
    // console.log(account);
    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            openLogin,
            setOpenLogin,
            setOpenSignup,
            openSignup,
            setProfile,
            profile
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider
