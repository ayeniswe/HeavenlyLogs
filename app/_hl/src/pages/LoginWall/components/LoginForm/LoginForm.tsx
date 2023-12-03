import './assets/LoginForm.css';
import '../../../../assets/Loader.css';
import Loader, { LoaderType } from '../../../../components/Loader';
import bannerSrc from '../../../../assets/icons/login-banner.svg';
import showSrc from '../../../../assets/icons/peek.svg';
import hideSrc from '../../../../assets/icons/hide.svg';
import detailSrc from '../../../../assets/icons/detail.svg';
import { useLogin } from './hooks/useLogin';

const LoginForm = () => {
  const { detail, loading, show, showPassword } = useLogin();
  return (
        <form id='login-form' className='LoginForm'>
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
                <img id ='password-eye-hide' className='LoginForm__login-section__input__eye' alt='hide password' onClick={() => showPassword()} src={ show ? showSrc : hideSrc}></img>
              </div>
            </div>
          </div>
          <div className='LoginForm__forgot-section'>
            <span>
              <a href='#'>Forgot your password?</a>
              <br/>
              <a href='#'>Forgot your username?</a>
            </span>
            <button id='login-button' type='submit' disabled={loading}>
              {loading ? <Loader type={LoaderType.DOT}/> : 'Login'}
            </button>
          </div>
          {detail && (
            <div className='LoginForm__error-message'>
              <img className='LoginForm__error-message__icon' alt='login error message' src={detailSrc}></img>{detail}
            </div>
          )}
          <div className='LoginForm__create-section'>
            <span>Not on HeavenlyLogs?</span>
            <a href='#'>Create an account</a>
          </div>
        </form>
    );
}

export default LoginForm;