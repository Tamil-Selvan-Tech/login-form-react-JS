import InputField from "./components/InputField"
import SocialLogin from "./components/sociallogin"

const App = () => {
  return (
    <div className="login-container">
      <h2 className="form-tittle">Log in with</h2>

      <SocialLogin />



      <p className="separator"><span>or</span></p>


      <form action="#" className="login-form">
        <InputField type="email" placeholder="Enter email" icon="mail" />
        <InputField type="password" placeholder="Enter password" icon="lock" />


        <a href="#" className="forgot-pass" > Forgot password ?</a>

        <button className="login">Login</button>

      </form >

      <p className="signup-text">Don't have an account? <a href="#">Signup Now</a></p>

    </div >
  )
}

export default App