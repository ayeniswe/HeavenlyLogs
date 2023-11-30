import '../../assets/LoginWall.css';
import ArtViewPortVerticalBorder from '../../components/ArtViewPortVerticalBorder';
import ArtViewPortHorizontalBorder from '../../components/ArtViewPortHorizontalBorder';
import ArtVerticalBorder from '../../components/ArtVerticalBorder';

type Props = {
    viewportBColor: string
}

/**
 * Renders the LoginWall page.
 *
 * @param {Props} viewportBColor - The background color of the viewport borders.
 * @return {JSX.Element} The rendered LoginWall page.
 */
const LoginWall = ({ viewportBColor }: Props ) => {
  const bannerSrc = './icons/login-banner.svg';
  const bibleSrc = './icons/bible.svg';
  const peekSrc = './icons/peek.svg';
  const hideSrc = './icons/hide.svg';
  return (
    <div id='LoginWall'>
      <span className='LoginWall__borders'>
        <span className='LoginWall__borders__vw LoginWall__borders__vw--left'><ArtViewPortVerticalBorder color={viewportBColor}/></span>
        <span className='LoginWall__borders__vw LoginWall__borders__vw--right'><ArtViewPortVerticalBorder color={viewportBColor}/></span>
        <span className='LoginWall__borders__vh LoginWall__borders__vh--top'><ArtViewPortHorizontalBorder color={viewportBColor}/></span>
        <span className='LoginWall__borders__vh LoginWall__borders__vh--bottom'><ArtViewPortHorizontalBorder color={viewportBColor}/></span>
      </span>
      <div className='LoginWall__layout'>
        <div className='LoginWall__layout__wallpaper'>
          <img alt='banner' src={bannerSrc} className='LoginWall__layout__wallpaper__banner'/>
          <img alt='bible' src={bibleSrc} className='LoginWall__layout__wallpaper__bible'/>
        </div>
        <ArtVerticalBorder color={viewportBColor}/>
        <form className='LoginWall__layout__form'>
          <div className='LoginWall__layout__form__userlogin-section'>
            <div>
              <label htmlFor='username'>Username</label>
              <br/>
              <div className='LoginWall__layout__form__userlogin-section__input'>
                <input type='text' id='username' name='username' required/>
              </div>
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <br/>
              <div className='LoginWall__layout__form__userlogin-section__input'>
                <input type='password' id='password' name='password' required/>
                <img className='LoginWall__layout__form__userlogin-section__input__peek-or-hide' src={peekSrc}></img>
              </div>
            </div>
          </div>
          <button className='LoginWall__layout__form__loginbutton' type='submit'>Login</button>
          <div className='LoginWall__layout__form__forgot-section'>
            <a href='#'>Forgot your password?</a>
            <a href='#'>Forgot your username?</a>
          </div>
          <div className='LoginWall__layout__form__create-section'>
            <span>Not on HeavenlyLogs?</span>
            <a href='#'>Create an account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginWall;
