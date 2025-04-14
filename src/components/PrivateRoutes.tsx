import { useSession } from '../providers/SessionProvider'
import { Navigate, Outlet } from 'react-router'
import Layout from './Layout'

export function PrivateRoutes() {
  const { session, isLoading } = useSession()

  if (session === undefined && isLoading === true) {
    return <div> Loading... </div>
  }

  if (session === null && isLoading === false) {
    return <Navigate to="/auth/sign-in" />
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
