import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
import { RefProvider } from './components/RefContext.jsx'

createRoot(document.getElementById('root')).render(
  <RefProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </RefProvider>
)
