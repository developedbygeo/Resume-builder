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
  @media ${devices.phoneStandard}{
    font-size: 35%;
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
font-family: 'Montserrat', sans-serif;
}
p,
button,
select,
input,
label,
div,
li {
  font-size: 1.8rem;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;
