const themeSettings = {
  colors: {
    header: '#31b1d8',
    main: '#fff ',
    footer: '#475569',
    gray: '#e2e9f4',
    headerTitles: '#0A2A33',
    progressBar: '#218BAB',
    errorBorder: '1px solid #b40e0e',
    errorBg: '#fddddd',
    previewSecondaryBg: '#083f5d',
    cta: { standard: '#31b1d8', hover: '#218bab' },
    secondary: { standard: '#475569', hover: '#323b49' },
  },
  mixins: {
    gridMixin: (cols, rows) => {
      return `
    display: grid;
    grid-template-columns: ${cols};
    grid-template-rows: ${rows};`;
    },
    flexMixin: (justify, align, dir) => {
      return `
      display: flex;
      justify-content: ${justify};
      align-items: ${align};
      flex-direction: ${dir}`;
    },
    maxContainer: () => {
      return `
      width: 100%;
      height: 100%;`;
    },
    inputStyle: () => {
      return `
      padding: 1rem 2.5rem;
      border: none;
      outline: none;
      color: 'black';
      background: #E2E9F4;
      `;
    },
  },
  breakpoints: {
    portrait: {
      phoneSmall: '280px',
      phoneStandard: '320px',
      phoneMedium: '375px',
      phoneWide: { width: '360px', height: '760px' },
      phone: '400px',
      phoneLarge: { width: '380px', height: '830px' },
      phablet: '560px',
      tabletSmall: '640px',
      tablet: { width: '768px', orientation: 'portrait' },
      tabletWide: '1024px',
    },
    landscape: {
      phoneSmall: { width: '320px', orientation: 'landscape' },
      phone: { width: '568px', height: '430px', orientation: 'landscape' },
      phoneWide: { width: '480px', orientation: 'landscape' },
      tablet: {
        widthMin: '1024px',
        widthMax: '1367px',
        heightMax: '840px',
        orientation: 'landscape',
      },
    },
    desktop: {
      standard: '1248px',
      wide: '1440px',
      fourK: '3800px',
    },
  },
};

export const devices = {
  // portrait
  phoneSmall: `(max-width: ${themeSettings.breakpoints.portrait.phoneSmall})`,
  phoneStandard: `(min-width: ${themeSettings.breakpoints.portrait.phoneStandard})`,
  phoneMedium: `(min-width: ${themeSettings.breakpoints.portrait.phoneMedium})`,
  phoneWide: `(min-width: ${themeSettings.breakpoints.portrait.phoneWide.width}) and (min-height: ${themeSettings.breakpoints.portrait.phoneWide.height})`,
  phone: `(min-width: ${themeSettings.breakpoints.portrait.phone})`,
  phoneLarge: `(min-width: ${themeSettings.breakpoints.portrait.phoneLarge.width}) and (min-height: ${themeSettings.breakpoints.portrait.phoneLarge.height})`,
  phablet: `(min-width: ${themeSettings.breakpoints.portrait.phablet})`,
  tabletSmall: `(min-width: ${themeSettings.breakpoints.portrait.tabletSmall})`,
  tabletPortrait: `(min-width: ${themeSettings.breakpoints.portrait.tablet.width}) and (orientation: ${themeSettings.breakpoints.portrait.tablet.orientation})`,
  tabletWide: `(min-width: ${themeSettings.breakpoints.portrait.tabletWide})`,
  // landscape
  phoneSmallLandscape: `(min-width: ${themeSettings.breakpoints.landscape.phoneSmall.width}) and (orientation: ${themeSettings.breakpoints.landscape.phoneSmall.orientation})`,
  phoneLandscape: `(min-width: ${themeSettings.breakpoints.landscape.phone.width}) and (max-height: ${themeSettings.breakpoints.landscape.phone.height}) and (orientation: ${themeSettings.breakpoints.landscape.phone.orientation})`,
  phoneWideLandscape: `(min-height: ${themeSettings.breakpoints.landscape.phoneWide.width}) and (orientation: ${themeSettings.breakpoints.landscape.phoneWide.orientation})`,
  tabletLandscape: `(min-width: ${themeSettings.breakpoints.landscape.tablet.widthMin}) and (max-width: ${themeSettings.breakpoints.landscape.tablet.widthMax}) and (max-height: ${themeSettings.breakpoints.landscape.tablet.heightMax}) and (orientation: ${themeSettings.breakpoints.landscape.tablet.orientation})`,
  // desktop
  desktop: `(min-width: ${themeSettings.breakpoints.desktop.standard})`,
  desktopWide: `(min-width: ${themeSettings.breakpoints.desktop.wide})`,
  fourK: `(min-width: ${themeSettings.breakpoints.desktop.fourK})`,
};

export default themeSettings;
