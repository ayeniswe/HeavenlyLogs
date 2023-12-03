import '../assets/ArtBorder.css';
export enum LoaderType {
    DOT = 'dot',
}

type Props = {
  type?: LoaderType
}

const Loader = ({ type }: Props ) => {
  return (
    <div className='DotLoader'>
        <div className='DotLoader__dot'/>
        <div className='DotLoader__dot'/>
        <div className='DotLoader__dot'/>
    </div>
  );
}

export default Loader;
