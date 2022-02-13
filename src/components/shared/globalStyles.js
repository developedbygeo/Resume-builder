import { createGlobalStyle } from 'styled-components';
import { devices } from './themeSettings';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content-wrapper{
  width: 100%;
}

html {
  font-size: 62.5%;
  @media print {
  overflow: hidden;
  font-size: 80%;
  @page { 
  overflow: hidden; };
}
  /* portrait */
  @media ${devices.phoneSmall}{
    font-size: 25%;
  }
  @media ${devices.phoneStandard}{
    font-size: 41%;
  }
  @media ${devices.phone}{
    font-size: 50%;
  }
  @media ${devices.phoneSmallLandscape}{
    font-size: 20%;
  }
  @media ${devices.tabletSmall}{
    font-size: 58%;
  }
  @media ${devices.tabletPortrait}{
    font-size: 62.5%;
  }
  @media ${devices.tabletWide}{
    font-size: 70%;
  }

  /* landscape */
  @media ${devices.phoneLandscape}{
    font-size: 32%;
  }
  @media ${devices.phoneWideLandscape}{
    font-size: 35%;
  }
  @media ${devices.tabletLandscape}{
    font-size: 62.5%;
  }
  /* desktop */
  @media ${devices.desktop}{
    font-size: 60%;
  }
  @media ${devices.desktopWide}{
    font-size: 65%;
  }
  @media ${devices.fourK}{
    font-size: 100%;
  }


}

body {
  height: 100vh;
  width: 100vw;
  font-family: 'Open Sans', sans-serif;
}

main {
  width: 100vw;
  height: 90vh;
  max-height: auto;
  background: ${({
    theme: {
      colors: { main },
    },
  }) => main || '#ffffff'};
&>.progressWrap{
  background: ${({ theme: { colors } }) => colors.header};
  height: 2rem;
}

@media ${devices.desktop}{
    &>.layoutContainer{
      width: 50%;
    }
  }
  @media ${devices.phoneSmallLandscape} {
    &>.layoutContainer{
      width: 50%;
    }
    
  }
}

h1 {
  font-size: 2.8rem;
  font-weight: 700;

}
h2 {
  font-size: 2.4rem;
  font-weight: 600
}
h3 {
  font-size: 2rem;
  font-weight: 500;
}
h1, h2, h3{
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.headerTitles}
}
p,
button,
select,
input,
textarea,
label,
div,
li {
  font-size: 1.8rem;
  font-family: 'Open Sans', sans-serif;
}
a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;
