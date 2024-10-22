import { useContext } from 'react';
import { ColorContext } from '../App';
import '../styles/Author.scss';

const Author = ({ author }) => {
  const color = useContext(ColorContext);
  
  return (
    <div id='author' style={{ color: color }}>{author}</div>
  );
}

export default Author;