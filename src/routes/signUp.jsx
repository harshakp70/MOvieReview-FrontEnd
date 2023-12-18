import React from 'react'
import styles from './signUp.module.css'

const SignUp = () => {
  return (
    <main className={styles.signUpMain}>
        <section className={styles.signUpSection}>
            <h1>Create Account</h1>
            <form className={styles.signUpForm}> 
                <label htmlFor="name">Name </label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Create Password</label>
                <input type="password"name="password" id="password" />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="confirmPassword"name="confirmPassword" id="confirmPassword" />
                <button type="submit">SignUp</button>
            </form>
        </section>
    </main>
  )
}

export default SignUp