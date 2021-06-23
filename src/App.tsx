import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react'

import { Content, Container, Header, Home, Recipe } from './components'
import { GlobalStyles, theme } from './styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Content>
        <Container>
          <Header/>
        </Container>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* TO DO id need to be changed from API data */}
          <Route exact path='/recipe-id' component={Recipe} />
          <Redirect to='/' />
        </Switch>
      </Content>
    </ThemeProvider>
  );
}

export default App;
