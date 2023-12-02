import '../assets/LoginForm.css';
import bannerSrc from '../../../assets/icons/login-banner.svg';
import peekSrc from '../../../assets/icons/peek.svg';
import hideSrc from '../../../assets/icons/hide.svg';

const LoginForm = () => {
    return (
        <form className='LoginForm'>
          <img alt='banner' src={bannerSrc} className='LoginForm__banner'/>
          <div className='LoginForm__login-section'>
            <div>
              <label htmlFor='username'>Username</label>
              <br/>
              <div className='LoginForm__login-section__input'>
                <input type='text' id='username' name='username' required/>
              </div>
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <br/>
              <div className='LoginForm__login-section__input'>
                <input type='password' id='password' name='password' required/>
                <img className='LoginForm__login-section__input__show' alt='show/hide password' src={peekSrc}></img>
              </div>
            </div>
          </div>
          <div className='LoginForm__forgot-section'>
            <a href='#'>Forgot your password?</a>
            <a href='#'>Forgot your username?</a>
            <button id='login-button' type='submit'>Login</button>
          </div>
          <div className='LoginForm__create-section'>
            <span>Not on HeavenlyLogs?</span>
            <a href='#'>Create an account</a>
          </div>
        </form>
    );
}

export default LoginForm;