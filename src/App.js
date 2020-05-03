import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';

import history from './components/History';
import Layout from './pages/Layout';
import Home from './pages/index';
import About from './pages/About';
import NewsDetails from './pages/NewsDetails';

import './App.css';


// const Home = () => <h1>Home</h1>
// const About = () => <h1>About</h1>
// const Post = () => <h1>Post</h1>
// const Project = () => <h1>Project</h1>

// class App extends Component {
//   render() {
//     return (
//       <div className="App container">
//         <BrowserRouter basename={'/'} >
//           <Switch>
//             <Route path="/" component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/posts" component={Post} />
//             <Route path="/projects" component={Project} />
//           </Switch>
//         </BrowserRouter>
//       </div>
//     )
//   }
// }

//export default App

class App extends Component {
  render() {
    return (
      <div class='body'>
        <BrowserRouter basename={'/'} >
          <Router history={history}>
            <Switch>
              <Layout>
                <Route exact path={`/`} component={Home} />
                <Route path={`/About`} component={About} />
                <Route exact path={`/NewsDetails/:id/:auth`} component={NewsDetails} />
              </Layout>
            </Switch>
          </Router>
        </BrowserRouter>
      </div>
    )
  }
}

 export default App;
