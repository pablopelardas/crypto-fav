import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import {store} from '@/app/store/store'
import {Provider} from 'react-redux'
import '../dist/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
