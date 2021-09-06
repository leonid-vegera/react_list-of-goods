/* eslint-disable */
import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    isVisible: false,
    sortBy: '',
    isReversed: false,
    setProductLength: 1,
  }

  visibleHandler = () => {  //для кнопки старт
    this.setState({
      isVisible: true,
    })
  }

  sortAlphab = () => (  //в стейт условие для сотрир по алфавиту
    this.setState({
      sortBy: 'abc',
    })
  )

  reset = () => (  //в стейт сброс условий
    this.setState({
      isRequired: false,
      sortBy: '',
      setProductLength: 1,
    })
  )

  sortLength = () => (  //в стейт условие для сотрир по длине
    this.setState({
      sortBy: '123',
    })
  )

  reverse = () => (  //в стейт условие для реверса
    this.setState(state => ({
      isReversed: !state.isReversed,
    }))
  )

  render() {
    const { isVisible, goods, sortBy, setProductLength } = this.state;
    const visibleGoods = [...goods].filter(good => good.length >= setProductLength);

    //сортируем в зависимости от условия
    visibleGoods.sort((good1, good2) => {
      switch (sortBy) {
        case '':
          return;
        case 'abc':
          return good1.localeCompare(good2);
        case '123':
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    if (this.state.isReversed) {  //включаем reverse если isReversed в стейте тру
      visibleGoods.reverse()
    }
      
    return (
      <div className="App">
{/*         если isVisible не тру, то рендерится кнопка, если тру - то верстка */}
        {!isVisible ? (
          <button
            type="button"
            onClick={this.visibleHandler}
          >
            Start
          </button>
        ) : (
          <div className="goods__wrapper">
              <h1>Goods</h1>

              <div>
                {`Set product length here `}
                <select
                  name="product-length"
                  value={setProductLength}
                  onChange={(event) => {
                  this.setState({
                    setProductLength: +event.target.value,
                  })
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>

                <button onClick={this.reset}>
                  Reset
                </button>
              </div>
              

              
            <button
                type="button"
                onClick={this.reverse}
            >
              Reverse
            </button>
              
            <button
                type="button"
                onClick={this.sortAlphab}
            >
              Sort Alphabet
            </button>
            
            {/* <button
                type="button"
                onClick={this.reset}
            >
              Reset
            </button> */}
            
            <button
                type="button"
                onClick={this.sortLength}
            >
              Sort by length
            </button>
              
              <GoodsList goods={visibleGoods} />
          </div>
        )}

      </div>
    )
  }

};

export default App;
