import React from 'react';
import ReactDOm from 'react-dom';
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Home / Games / About / Women / // how to call each different component here? />
      <Footer />
    
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"))