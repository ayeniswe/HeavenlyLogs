import './assets/Login.css';
import bibleBannerSrc from '../../assets/icons/login-banner-bible.svg';
import ArtVerticalBorder from '../../components/ArtVerticalBorder';
import LoginForm from './components/LoginForm/LoginForm';
import ViewPortBorders from './components/ViewPortBorders/ViewPortBorders';

const Login = () => {
  return (
    <>
      <ViewPortBorders/>
      <div className='Login__layout'>
        <img alt='login banner w/ bible' src={bibleBannerSrc} className='Login__layout__banner'/>
        <span className='Login__layout__center-border'><ArtVerticalBorder/></span>
        <LoginForm/>
      </div>
    </>
  );
};

export default Login;