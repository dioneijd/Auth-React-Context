import { FormEvent } from "react"
import { useAuth } from "../contexts/auth"
import  styles  from "../styles/pages/login.module.css"


export default function Login(){
    const { signed, user, signIn, isLoading } = useAuth()


    async function handleSignIn(e: FormEvent){
        e.preventDefault()



        signIn()
    }

    return (
        <div className={styles.container}>

            <form onSubmit={handleSignIn}>
                <h1>LOGIN</h1>

                <input type="text" name="txtUserName" id="txtUserName" placeholder="Usuario"/>
                <input type="password" name="txtPass" id="txtPass" placeholder="Senha"/>
                <button type="submit" disabled={isLoading} >Sing In</button>
            </form>


        </div>

    )
}