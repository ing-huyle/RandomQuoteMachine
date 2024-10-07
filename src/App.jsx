import "./styles/App.scss";
import ButtonIcon from "./buttons/ButtonIcon";
import ButtonText from "./buttons/ButtonText";
import $ from "jquery";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { quoteActions } from "./quoteSlice.js";

export const colors = [
  "#fb6964",
  "#bdbb99",
  "#16a085",
  "#73a857",
  "#2c3e50",
  "#f39c12",
  "#472e32",
  "#9b59b6",
  "#e74c3c"
];

const App = ({ index, content, author }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(quoteActions.new_quote());
  }

  // Quote and author fading
  useEffect(() => {
    $("#text").addClass("fade");
    $("#author").addClass("fade");

    const timerFade = setTimeout(() => {
      $("#text").removeClass("fade");
      $("#author").removeClass("fade");
    }, 1500);

    return () => {
      clearTimeout(timerFade);
    };
  }, [index]);

  let color = colors[index];
  $("body").css("background-color", color);

  return (
    <div id="quote-box">
      <div id="text" style={{ color: color }}>{content}</div>
      <div id="author" style={{ color: color }}>{author}</div>
      <div className="btn-row">
        <ButtonIcon 
          color={color}
          url={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${content}`}
          d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
        />
        <ButtonText color={color} text="New quote" onClick={handleClick} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  index: state.index,
  content: state.content,
  author: state.author
});

export default connect(mapStateToProps)(App);