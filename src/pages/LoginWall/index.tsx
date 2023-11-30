import LoginWallComponent from './LoginWall';
import { getColorScheme } from '../../utils/colorscheme';

const LoginWall = () => {
    // TODO make color scheme dynamic
    const VIEWPORTBCOLOR = getColorScheme(0).VIEWPORTBCOLOR;
    return (
        <>
            <LoginWallComponent viewportBColor={VIEWPORTBCOLOR}/>
        </>
    );
}

export default LoginWall;