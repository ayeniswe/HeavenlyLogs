import '../assets/ViewPortBorders.css'

import ArtViewPortHorizontalBorder from '../../../components/ArtViewPortHorizontalBorder';
import ArtViewPortVerticalBorder from '../../../components/ArtViewPortVerticalBorder';

type Props = {
    color: string
}

/**
 * Render the ViewPortBorders component.
 *
 * @param {Props} color - The color prop to customize the borders.
 * @return {JSX.Element} The rendered ViewPortBorders component.
 */
const ViewPortBorders = ({ color }: Props ) => {
    return (
        <>
            <span className='ViewPortBorders__vw ViewPortBorders__vw--left'><ArtViewPortVerticalBorder color={color}/></span>
            <span className='ViewPortBorders__vw ViewPortBorders__vw--right'><ArtViewPortVerticalBorder color={color}/></span>
            <span className='ViewPortBorders__vh ViewPortBorders__vh--top'><ArtViewPortHorizontalBorder color={color}/></span>
            <span className='ViewPortBorders__vh ViewPortBorders__vh--bottom'><ArtViewPortHorizontalBorder color={color}/></span>
        </>
    );
}

export default ViewPortBorders;