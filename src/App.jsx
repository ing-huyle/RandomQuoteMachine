import './styles/App.scss';
import Text from './components/Text.jsx';
import Author from './components/Author.jsx';
import ButtonIcon from './components/ButtonIcon';
import ButtonText from './components/ButtonText';
import $ from 'jquery';
import { useEffect, useRef, createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorActions } from './redux-toolkit/colorSlice.js';
import { fetchQuote } from './redux-toolkit/quoteSlice.js';

const colors = [
  '#fb6964',
  '#bdbb99',
  '#16a085',
  '#73a857',
  '#2c3e50',
  '#f39c12',
  '#472e32',
  '#9b59b6',
  '#e74c3c'
];

const generateRandomColor = (excludeColor) => {
  let newColor;
  do {
    newColor = colors[Math.floor(Math.random() * colors.length)];
  } while (newColor === excludeColor);
  return newColor;
}

export const initialState = {
  color: generateRandomColor('#000000')
};

export const ColorContext = createContext();

const App = () => {
  const color = useSelector((state) => state.color.color);
  const quote = useSelector((state) => state.quote);
  const { value, author } = quote;
  const timeoutRef = useRef(null);
  const dispatch = useDispatch();

  const colorChanged = (color) => {
    $('body').css('background-color', color);
    $('#text').addClass('fade');
    $('#author').addClass('fade');
    
    dispatch(fetchQuote());

    if (timeoutRef) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      $('#text').removeClass('fade');
      $('#author').removeClass('fade');
    }, 1500);
  }

  const handleClick = () => {
    const newColor = generateRandomColor(color);
    dispatch(colorActions.setColor(newColor));
    colorChanged(newColor);
  }

  useEffect(() => colorChanged(initialState.color), []);

  return (
    <div id='quote-box'>    
      {/* {quote.loading && <div>Loading...</div>} */}
      {!quote.loading && quote.error ? <div>Error: {quote.error}</div> : null}
      {!quote.error && value &&
        <div>
          <ColorContext.Provider value={color}>
            <Text value={value} />
            <Author author={author} />
            <div className='btn-row'>
              <ButtonIcon 
                url={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${value}`}
                d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z'
              />
              <ButtonText text='New quote' onClick={handleClick} />
            </div>
          </ColorContext.Provider>
        </div>
      }
      <p>Coded by<a href='https://www.linkedin.com/in/ing-huyle' target='_blank'>ing.huyle</a><br/>
        Designed by freeCodeCamp
      </p>
    </div>
  );
}

export default App;