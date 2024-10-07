export default function ButtonIcon({ color = "#e39f00", url, d }) {
  return (
    <button className="btn" style={{ backgroundColor: color }}>
      <a className="btn-icon" href={url} target="_blank">
        <svg viewBox="0 0 512 512"><path d={d} /></svg>
      </a>
    </button>
  );
}