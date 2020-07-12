import React from 'react'
import { renderRoutes } from 'react-router-config'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import routes from './routes/index'
import store from './store/index'
import {Data} from './modules/Singers/data'
import './App.css'
import { GlobalStyle } from './style.js'
import { IconStyle } from './../src/assets/iconfont/font_1271317_531pcg6tcgu/iconfont'

function App() {
  return (
    <Provider className="App" store={store}>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <Data>
          {renderRoutes(routes)}
        </Data>
      </BrowserRouter>
    </Provider>
  );
}

export default hot(module)(App);
