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
    const { isVisible, goods, sortBy } = this.state;
    const visibleGoods = [...goods];

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
            
            <button
                type="button"
                onClick={this.reset}
            >
              Reset
            </button>
            
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
