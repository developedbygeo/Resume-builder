import { ThemeProvider } from 'styled-components';
import themeSettings from './components/shared/themeSettings';
import GlobalStyle from './components/shared/globalStyles';
import Header from './components/Header/Header';
import Personal from './components/Personal/Personal';
import { LayoutContainer } from './components/shared/Container.styled';
import Contact from './components/Contact/Contact';
import Employment from './components/Employment/Employment';

const App = () => {
  return (
    <ThemeProvider theme={themeSettings}>
      <>
        <GlobalStyle />
        <Header />
        <main>
          <LayoutContainer>
            <Personal />
            <Contact />
            <Employment />
          </LayoutContainer>
        </main>
      </>
    </ThemeProvider>
  );
};

export default App;
