import React, { Component} from 'react';

const App = () => {
  const profiles = [
    { name: "遠藤正明", age: 53},
    { name: "影山ヒロノブ", age: 60},
  ]
  return(
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}


const User = (props) => {
return <div>こんにちは,{props.name},年齢は{props.age}ちゃいです</div>
}

export default App;
