import { COLOR } from "./colors";

export const LIGHTSCHEME = {
    VIEWPORTBCOLOR: COLOR.BLACK,
}

export const DARKSCHEME = {
    VIEWPORTBCOLOR: COLOR.WHITE,
}

export const getColorScheme = (schemeID: number) => {
    let scheme;
    switch (schemeID) {
        case 0:
            scheme = LIGHTSCHEME;
            break;
        case 1:
            scheme = DARKSCHEME;
            break;
        default:
            scheme = LIGHTSCHEME;
            break;
    } 
    return scheme;
}
