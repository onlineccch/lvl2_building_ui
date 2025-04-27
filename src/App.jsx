import "./App.css";
import styles from "./App.module.css";
import styled from "styled-components";

// start here
const Title = styled.h1`
  color: tomato;
  font-size: 2rem;
  text-align: center;
`; // end here

function App() {
  return (
    <>
      {/* 1. Regular CSS */}
      <span>1. Regular CSS</span>
      <h1 className="title">Hello, world!</h1>
      <br />
      <hr />
      {/* 2. CSS Modules */}
      <span>2. CSS Modules</span>
      <h1 className={styles.title}>Hello, CSS Modules!</h1>
      <br />
      <hr />
      {/* 3. Styled-Components */}
      <span>3. Styled-Components</span>
      <Title>Hello, Styled-Components!</Title>
    </>
  );
}

export default App;
