import { CSSReset, theme, ThemeProvider } from "@chakra-ui/core";
import loadable from '@loadable/component';
import React from 'react';
const MultiStepForm = loadable(() => import('./components/MultiStepFormTwo'))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset/>
      <MultiStepForm/>
    </ThemeProvider>
  );
}

export default App;
