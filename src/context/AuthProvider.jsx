import { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import * as AuthService from '../service/auth.service'

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const initAuth = async () => {
    try {
      setIsLoading(true)
      const response = await AuthService.getMe()
      console.log('res:', response.data.user)
      setUser(response.data.user)
    } catch (err) {
      console.error('[GetMe]', err)
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    initAuth()
  }, [])

  const refreshUser = async () => {
    await initAuth()
  }

  const logOut = async () => {
    try {
      setIsLoading(true)
      const res = await AuthService.logOut()
      console.log(res)
      setUser(res.data.user)
    } catch (err) {
      console.error('[GetMe]', err)
      setUser(null)
    } finally {
      setIsLoading(false)
      setUser(null)
    }
  }

  const value = { isLoading, user, refreshUser, logOut }
  console.log(value)

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
