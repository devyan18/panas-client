import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import { PrivateRoutes } from './components/PrivateRoutes'
import { SignInPage } from './pages/SignInPage'
import { GastosPage } from './pages/GastosPage'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/auth/*">
          <Route path="sign-in" element={<SignInPage />} />
        </Route>

        <Route path="/protected/*" element={<PrivateRoutes />}>
          <Route index element={<div>Protected</div>} />
          <Route path="gastos" element={<GastosPage />} />
        </Route>

        <Route>404: No such page!</Route>
      </Routes>
    </BrowserRouter>
  )
}
