import React from "react";
import styles from "./App.module.scss";
import { NavigationRouter } from "./navigation/NavigationRouter/NavigationRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className={styles.container}>
      <Router>
        <NavigationRouter />
      </Router>
    </div>
  );
}

export default App;
