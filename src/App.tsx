import { useSession } from './providers/SessionProvider.tsx'

export default function App() {
  const { session } = useSession()

  if (session === null) {
    return (
      <div>
        <p>Te faltó iniciar sesión.</p>
      </div>
    )
  }

  return <div>¡Hola pibe!</div>
}
