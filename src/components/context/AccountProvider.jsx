import {createContext,useState} from 'react'

export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {
    
    const user = {
            f_name : "aaa",
              l_name : "bbb",
              e_mail : "ccc",
              password: "ddd",
              image : "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-7.jpg"
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
