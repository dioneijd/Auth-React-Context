import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import * as auth from '../services/auth'
import api from '../services/auth.api'

interface AuthContextData {
    signed: boolean
    user: object | null
    isLoading: boolean
    signIn: () => Promise<void>
    signOut: () => void
}

interface AuthProviderProps {
    children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<object | null>(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        async function loadStoragedData(){
            const storagedUser = localStorage.getItem('@RNAuth:user')
            const storagedToken = localStorage.getItem('@RNAuth:token')
            
            // simulate loading 
            //await new Promise( (resolve) => setTimeout(resolve, 2000))

            if (storagedUser && storagedToken){
                setUser(JSON.parse(storagedUser))
                api.defaults.headers.Authorization = `Bearer ${storagedToken}`
            }

            setIsLoading(false)
        }
        loadStoragedData()
    }, [])


    async function signIn(){
        const response = await auth.singIn()
        setUser(response.user)
        localStorage.setItem('@RNAuth:user', JSON.stringify(response.user))
        localStorage.setItem('@RNAuth:token', response.token)

        api.defaults.headers.Authorization = `Bearer ${response.token}`
        
    }
    
    function signOut(){
        localStorage.removeItem('@RNAuth:user')
        localStorage.removeItem('@RNAuth:token')
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            isLoading,
            signIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )    
}

export function useAuth(){
    return useContext(AuthContext)
}