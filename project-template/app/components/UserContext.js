import { createContext, useState, useEffect } from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'

const UserContext = createContext()

export default UserContext

export function UserContextProvider({
  children
}) {
  const supabaseClient = useSupabaseClient()
  const supabaseUser = useUser()
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(function() {
    if (supabaseUser) {
      setUser(supabaseUser)
      setLoading(false)
    } 
  }, [supabaseUser])
  return (
    <UserContext.Provider
      value={{
        user: user,
        logout: async function() {
          await supabaseClient.auth.signOut()
          setUser(null)
        }
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
