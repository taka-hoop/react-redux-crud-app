import React, { Component} from 'react';

// class App extends Component {
//   render() {
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("push click")}} />;
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
  <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>
  )
}
const Cat = () => {
  return <div>にゃ〜ん</div>
}

export default App;
