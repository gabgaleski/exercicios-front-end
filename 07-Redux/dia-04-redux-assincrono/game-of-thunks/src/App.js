import React from 'react'
import Personal from './components/personal';
import { connect } from 'react-redux';
import { personalApi } from './redux/actions';

class App extends React.Component {
  state = {
    url: '',
  }

  handleChange = ({target}) => {
    this.setState({
      url: target.value,
    })
  }

  render() {
    const {dispatch} = this.props;
    const {url} = this.state;
   return (
    <div>
      <input onChange={this.handleChange} name='url' type='text' value={url} />
      <button onClick={() => dispatch(personalApi(this.state.url))}>Procurar</button>
      <Personal />
    </div>
  );
  }
}

export default connect()(App);
