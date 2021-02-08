import React from 'react'
import Layout from './components/common/Layout'
import {Route,HashRouter,BrowserRouter,Link,Switch} from 'react-router-dom'
import about from './components/common/about'
import Page from './components/common/Page'
function App() {
  return (
     
    <BrowserRouter>
      <HashRouter>
          <Switch>
              <Route path="/" exact component={Layout} />
              <Route path="/about" exact component={about} />
              <Route path="/:id" exact component={Page} /> 
          </Switch> 
      </HashRouter>
    </BrowserRouter>
  )
}

export default App
