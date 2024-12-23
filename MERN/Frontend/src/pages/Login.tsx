import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {

    const [getGender, setGetGender] = useState<string>("")
    const [dateBirth, setDateBirth] = useState<string>("")
  return (
    <div className='login'>
        <main>
            <h1 className='heading'>Login</h1>

            <div className='login-input-gender'>
                <label>Select Your Gender</label>
                <select  value={getGender} onChange={(e) => setGetGender(e.target.value)}>
                    <option value="">Select Your Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className='login-input-date'>
                <label> Enter Your Birth Date</label>
                <input type="date" value={dateBirth} onChange={e=> setDateBirth(e.target.value)} />
            </div>
            <div className='login-btn'>
                <p>Already You have an account</p>
                <button><FcGoogle/><span>Sign In Google</span></button>
            </div>
        </main>        
    </div>
  )
}

export default Login
