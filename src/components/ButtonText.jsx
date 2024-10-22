import '../styles/ButtonText.scss';
import { useContext } from "react";
import { ColorContext } from "../App";

export default function ButtonText({ text, onClick }) {
  const color = useContext(ColorContext);
  
  return (
    <button className='btn btn-text' style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
  );
}