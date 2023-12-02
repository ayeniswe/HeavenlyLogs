import './assets/Login.css';
import bibleBannerSrc from '../../assets/icons/login-banner-bible.svg';
import ArtVerticalBorder from '../../components/ArtVerticalBorder';
import LoginForm from './components/LoginForm';
import ViewPortBorders from './components/ViewPortBorders';

type Props = {
    viewportBColor: string
}

/**
 * Renders the Login page.
 *
 * @param {Props} viewportBColor - The background color of the viewport borders.
 * @return {JSX.Element} The rendered Login page.
 */
const Login = ({ viewportBColor }: Props ) => {
  return (
    <>
      <ViewPortBorders color={viewportBColor}/>
      <div className='Login__layout'>
        <img alt='login banner w/ bible' src={bibleBannerSrc} className='Login__layout__banner'/>
        <span className='Login__layout__center-border'><ArtVerticalBorder color={viewportBColor}/></span>
        <LoginForm/>
      </div>
    </>
  );
};

export default Login;