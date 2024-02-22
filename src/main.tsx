import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "normalize.css" // 样式归一化
// import "amfe-flexible/index.js"; // 可伸缩布局方案


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode> // 会执行两次
    <App />
  // </React.StrictMode>,
)
