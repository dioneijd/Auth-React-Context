import { useAuth } from '../contexts/auth'
import AppRoutes from '../routes/app.routes'
import AuthRoutes from '../routes/auth.routes'


const Routes = () => {
    const { signed, isLoading } = useAuth()

    if (isLoading){
        return (
            <h1>LOADING ...</h1>
        )
    }

    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes

