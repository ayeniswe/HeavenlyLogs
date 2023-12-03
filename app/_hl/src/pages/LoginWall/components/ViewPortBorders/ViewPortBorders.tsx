import './assets/ViewPortBorders.css'
import ArtViewPortHorizontalBorder from '../../../../components/ArtViewPortHorizontalBorder';
import ArtViewPortVerticalBorder from '../../../../components/ArtViewPortVerticalBorder';

const ViewPortBorders = () => {
    return (
        <>
            <span className='ViewPortBorders__vw ViewPortBorders__vw--left'><ArtViewPortVerticalBorder/></span>
            <span className='ViewPortBorders__vw ViewPortBorders__vw--right'><ArtViewPortVerticalBorder/></span>
            <span className='ViewPortBorders__vh ViewPortBorders__vh--top'><ArtViewPortHorizontalBorder/></span>
            <span className='ViewPortBorders__vh ViewPortBorders__vh--bottom'><ArtViewPortHorizontalBorder/></span>
        </>
    );
}

export default ViewPortBorders;