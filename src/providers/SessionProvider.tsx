import { type Session, User } from '@supabase/supabase-js'
import { useEffect, useState, createContext, useContext } from 'react'
import { supabase } from '../supabaseClient'

type SessionContextType = {
  session: Session | null
  user: User | null
  isLoading: boolean
}

const SessionContext = createContext<SessionContextType>({
  session: null,
  user: null,
  isLoading: false,
})

type Props = {
  children: React.ReactNode
}

export default function SessionProvider({ children }: Props) {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<any>(null)
  const [isLoading, setLoading] = useState<boolean>(false)

  const fetchSession = async () => {
    setLoading(true)
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      setSession(session)
      if (session) {
        setUser(session.user)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error('Error fetching session:', error)
      setSession(null)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session) {
        setUser(session.user)
      } else {
        setUser(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <SessionContext.Provider value={{ session, user, isLoading }}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => useContext(SessionContext)
