import React, { useState } from 'react'
import { useNavigation } from 'react-router-dom'

const useRegistration = () => {
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const Register = async (username: string, password: string) => {
        setIsLoading(true)
        setError(false)

        const request = await fetch("http://localhost:5074/api/Auth/Register",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        })

        if(!request.ok)
            {
                setIsLoading(false)
                setError(true)
            }
        if(request.ok)
            {
                const data = await request.json()
                const user = {
                    email: data.username ,
                    username: data.username ,
                }
                setIsLoading(false)
                setError(false)
            }
    }
  return {Register, isLoading, error }
}

export default useRegistration
