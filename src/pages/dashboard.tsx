import { useAuth } from "../contexts/auth"

export default function Dashboard(){

    const { signOut } = useAuth()

    return (
        <>
            <h1>DASHBOARD</h1>
            <button onClick={signOut}>Logout</button>
        </>
    )
}