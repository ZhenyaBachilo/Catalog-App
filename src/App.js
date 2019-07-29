import React from 'react';
import './App.css';
import { CatalogList } from './components/CatalogList';
import { InputSearch } from './components/InputSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  updateData = (value) => {
    this.setState({
      value: value
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className='header'>
          <h1 className='appHeader'>Catalog</h1>
          <InputSearch updateData={this.updateData} />
        </header>
        <CatalogList inputText={this.state.value} />
      </div>
    );
  }
}

export default App;
