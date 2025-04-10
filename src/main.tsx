import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SessionProvider from './providers/SessionProvider.tsx'
import Layout from './components/Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <SessionProvider>
    <Layout>
      <App />
    </Layout>
  </SessionProvider>,
)
