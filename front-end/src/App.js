import React from 'react';
import ReactDOm from 'react-dom';
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Home / Games / About / Women / />
      <Footer />
    
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"))