import Header from "./components/Header"
import Body from "./components/Body"
import React, { useState } from 'react'

function App() {
  const [pageState, setPageState] = useState([
    {
      id: 1,
      state: true,
      text: 'Home'
    },
    {
      id: 2,
      state: false,
      text:'About'
    },
    {
      id: 3,
      state: false,
      text:'Contact'
    }
  ]);

  const togglePage = (id) => (
    setPageState(pageState.map((pages) => (
      {...pageState, state: !pages.state}
    )))
  );

  return (
    <div className="App">
      <Header text={'Add'} pageState={pageState} clickFunct={() => togglePage(1)}/>
      <Body pageState={pageState} />
    </div>
  );


}

export default App;
