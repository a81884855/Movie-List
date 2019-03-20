import React, {Component} from 'react';


var defaultMovies = [
 {title: 'Mean Girls'},
 {title: 'Hackers'},
 {title: 'The Grey'},
 {title: 'Sunshine'},
 {title: 'Ex Machina'},
];

class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   currentMovie : defaultMovies
  }
 }
 render(){
  return (
   <div>
    <div className="movieList">
     {this.state.currentMovie.map((movie)=>
      <div className = "movie">{movie.title}</div>
     )}
    </div>
   </div>
  )
 }
}

export default App