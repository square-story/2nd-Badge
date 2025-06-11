import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FormProvider } from './components/FormContext.jsx'
import { ColorProvider } from './components/ColorChangerUsingUseContex.jsx'

createRoot(document.getElementById('root')).render(
  <FormProvider>
    <ColorProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ColorProvider>
  </FormProvider>
)
