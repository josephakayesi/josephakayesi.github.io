import React from 'react';
import classnames from 'classnames';
import Description from './components/Description/Description'
import Social from './components/Social/Social'
import './App.css';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      ready: false
    };
  }

  componentDidMount () {


    setTimeout(() => {
      this.setState({
        ready: true
      });
    }, 500);
  }

  render() {

    const appClasses = classnames('App', {
      ready: this.state.ready
    });

    return (
      <div className={appClasses}>
        <div className="App__Description">
          <Description />
        </div>
        <div className="App__Social">
          <Social />
        </div>
      </div>
    );
  }
}

export default App;
