import { useAuth } from '../contexts/auth'
import AppRoutes from '../routes/app.routes'
import AuthRoutes from '../routes/auth.routes'
import Loading from '../pages/loading'

const Routes = () => {
    const { signed, isLoading } = useAuth()

    if (isLoading){
        return (
            <Loading/>
        )
    }

    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes

