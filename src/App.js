import Header from "./components/Header"
import Body from "./components/Body"
import React, { useState } from 'react'

function App() {
  const [pageState, setPageState] = useState([
    {
      id: 1,
      state: true,
      button: "Home",
      text: 'This is home text.'
    },
    {
      id: 2,
      state: false,
      button: "About",
      text:'This is about text.'
    },
    {
      id: 3,
      state: false,
      button: "Contact",
      text:'Contact me.'
    }
  ]);

  const togglePage = (id) => (
    setPageState(
      pageState.map((pages) => (
      (id === pages.id) ? { ...pages, state: true } : { ...pages, state: false}
    ))
    )
  );

  return (
    <div className="App">
      <Header pageState={pageState} clickFunct={(id) => togglePage(id)}/>
      <Body pageState={pageState} />
    </div>
  );


}

export default App;
