import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';

import { Home } from './components/home';
import { Content } from './components/styles/content';
import { Container } from './components/styles/container';
import { Header } from './components/header';
import { Recipe } from './components/recipe';
import { theme } from './styles';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content>
        <Container>
          <NavLink to="/">
            <Header />
          </NavLink>
        </Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/recipe/:recipeId(\d+)" component={Recipe} />
          <Redirect to="/" />
        </Switch>
      </Content>
    </ThemeProvider>
  );
}

export default App;
