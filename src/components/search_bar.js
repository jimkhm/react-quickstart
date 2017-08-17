import React, {Component} from 'react';

//functional component
//const SearchBar = () => {
//  return <input />;
//};

//const Component = React.Component;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange= { event => this.onInputChange(event.target.value)} />

      </div>
    );
  }


  onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
  }

//handle or on //name of the element //name of event
//onInputChange(event) {
//  console.log(event);
//  }

}

export default SearchBar;

//let me start by defining it state as a plain JavaScript object that is used to record and react to user events each class based component
//that we define has its own state object
//whenever a component sate is changed the component immediately render and also forces all of its children to render as well
