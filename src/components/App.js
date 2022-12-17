import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

{/* write an <About> component here */}

function About() {
  return (
    <div id ='about'>
      <h2>About</h2>
    </div>
  )
}

function Message() {
  return (
    <div>
      <h1>This is just a test so i can see how react is working</h1>
      <div>This is also in this section</div>
    </div>
  )
}

function App() {
  return (
    <div>
      <NavBar />
      {/* add the <Home> component here */}
      <Home />
      {/* add your <About> component here */}
      <About />
      <Message />
    </div>
  );
}

export default App;
