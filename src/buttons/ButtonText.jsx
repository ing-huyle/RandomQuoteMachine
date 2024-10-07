export default function ButtonText({ color = "#e39f00", text, onClick }) {
  return (
    <button className="btn btn-text" style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
  );
}