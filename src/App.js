import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./partial/Home";
import { About } from "./partial/About";
import { Contact } from "./partial/Contact";
import { NoMatch } from "./partial/NoMatch";
import {Container} from 'react-bootstrap'
// import { Layout } from "./components/Layout";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Layout> */}
        <Container>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
          </Container>
        {/* </Layout> */}
      </React.Fragment>
    );
  }
}

export default App;
