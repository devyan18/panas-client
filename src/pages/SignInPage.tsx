import { supabase } from '../supabaseClient'

export function SignInPage() {
  const handleSignInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })

    if (error) {
      console.error('Error signing in with Google:', error.message)
    }
  }

  return (
    <div>
      <button onClick={handleSignInWithGoogle}>Login with Google</button>
    </div>
  )
}
