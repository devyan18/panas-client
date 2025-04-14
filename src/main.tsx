import './index.css'
import { createRoot } from 'react-dom/client'
import SessionProvider from './providers/SessionProvider.tsx'
import Router from './Router.tsx'
// import './katex.min.css'
import 'katex/dist/katex.min.css'
import { ThemeProvider } from './providers/DarkMode.tsx'

createRoot(document.getElementById('root')!).render(
  <SessionProvider>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router />
    </ThemeProvider>
  </SessionProvider>,
)
