import '../assets/ArtBorder.css';

type Props = {
  color: string
}

const ArtViewPortHorizontalBorder = ({ color }: Props ) => {
  const style:React.CSSProperties = {
    backgroundColor: color,
    borderColor: color
  };
  return (
    <div className='ArtViewPortBorder--horizontal'>
        <div style={style} className='ArtViewPortBorder__end'></div>
        <div style={style} className='ArtViewPortBorder__hline'></div>
        <div style={style} className='ArtViewPortBorder__end'></div>
    </div>
  );
}

export default ArtViewPortHorizontalBorder;
