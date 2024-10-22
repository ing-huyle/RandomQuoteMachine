import '../styles/ButtonIcon.scss';
import { useContext } from "react";
import { ColorContext } from "../App";

export default function ButtonIcon({ url, d }) {
  const color = useContext(ColorContext);
  
  return (
    <button className='btn' style={{ backgroundColor: color }}>
      <a className='btn-icon' href={url} target='_blank'>
        <svg viewBox='0 0 512 512'><path d={d} /></svg>
      </a>
    </button>
  );
}