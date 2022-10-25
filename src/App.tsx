import { GlobalStyle } from './components';
import { defaultTheme } from './constants';
import { ThemeProvider } from './providers';
import {
  Main,
} from './views';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <main>
        <Main />
      </main>
    </ThemeProvider>
  )
}