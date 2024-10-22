import { useContext } from 'react';
import { ColorContext } from '../App';
import '../styles/Text.scss';

const Text = ({ value }) => {
  const color = useContext(ColorContext);

  return (
    <div id='text' style={{ color: color }}>{value}</div>
  );
}

export default Text;