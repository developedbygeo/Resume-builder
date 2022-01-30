import { ThemeProvider } from 'styled-components';
import themeSettings from './components/shared/themeSettings';
import GlobalStyle from './components/shared/globalStyles';
import Header from './components/Header/Header';
import Personal from './components/Personal/Personal';
import { LayoutContainer } from './components/shared/Container.styled';
import Contact from './components/Contact/Contact';
import Employment from './components/Employment/Employment';
import Education from './components/Education/Education';
import InformationProvider from './store/infoContext';
import ExtraInformation from './components/ExtraInformation/ExtraInformation';

const App = () => {
  return (
    <ThemeProvider theme={themeSettings}>
      <InformationProvider>
        <>
          <GlobalStyle />
          <Header />
          <main>
            <LayoutContainer>
              <Personal />
              <Contact />
              <Employment />
              <Education />
              <ExtraInformation />
            </LayoutContainer>
          </main>
        </>
      </InformationProvider>
    </ThemeProvider>
  );
};

export default App;
