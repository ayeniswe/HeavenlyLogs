import LoginComponent from './Login';
import { getColorScheme } from '../../utils/colorscheme';

const Login = () => {
    // TODO make color scheme dynamic
    const VIEWPORTBCOLOR = getColorScheme(0).VIEWPORTBCOLOR;
    return (
        <>
            <LoginComponent viewportBColor={VIEWPORTBCOLOR}/>
        </>
    );
}

export default Login;