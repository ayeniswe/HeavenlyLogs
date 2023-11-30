import '../assets/ArtBorder.css';

type Props = {
  color: string
}

const ArtViewPortVerticalBorder = ({ color }: Props ) => {
  const style: React.CSSProperties = {
    backgroundColor: color,
    borderColor: color
  };
  return (
    <div className='ArtViewPortBorder--vertical'>
        <div style={style} className='ArtViewPortBorder__end'></div>
        <div style={style} className='ArtViewPortBorder__vline'></div>
        <div style={style} className='ArtViewPortBorder__end'></div>
    </div>
  );
};
export default ArtViewPortVerticalBorder;