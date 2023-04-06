import React from 'react'
import { connect } from 'react-redux';

class Personal extends React.Component {
  render() {
    const {gender, name, born, culture, titles} = this.props
   return (
    <div>
      <h2>{name}</h2>
      <p>{gender}</p>
      <p>{born}</p>
      <p>{culture}</p>
      {titles.map((title) => {
        return <p>{title}</p>
      })}
    </div>
  );
  }
}

const mapStateToProps = (state) => ({
  name: state.infos.name,
  gender: state.infos.gender,
  born: state.infos.born,
  culture: state.infos.culture,
  titles: state.infos.titles,
});

export default connect(mapStateToProps)(Personal);
