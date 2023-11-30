import '../assets/ArtBorder.css';

type Props = {
  color: string
}

const ArtVerticalBorder = ({ color }: Props ) => {
  const style: React.CSSProperties = {
    backgroundColor: color,
    borderColor: color
  };
  return (
    <div className='ArtBorder--vertical'>
        <div style={style} className='ArtBorder__end'></div>
        <div style={style} className='ArtBorder__vline'></div>
        <div style={style} className='ArtBorder__end'></div>
    </div>
  );
};
export default ArtVerticalBorder;