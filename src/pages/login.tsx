import { useAuth } from "../contexts/auth"

export default function Login(){
    const { signed, user, signIn } = useAuth()

    async function handleSignIn(){
        signIn()
    }

    return (
        <>
            <h1>LOGIN</h1>
            <button onClick={handleSignIn}>Sing In</button>
        </>
    )
}