import { CSSReset, theme, ThemeProvider } from "@chakra-ui/core";
import React from 'react';
import MultiStepForm from './components/MultiStepFormTwo';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset/>
      <MultiStepForm/>
    </ThemeProvider>
  );
}

export default App;
