import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

// import Badge from './components/Badge'
// import BadgeNew from './pages/BadgeNew'
import Badges from './pages/Badges'


const container = document.getElementById('app')

ReactDOM.render(<Badges 
  // firstName="Gabriel"
  // lastName="Quevedo"
  // jobTitle="Frontend Developer"
  // twitter="gabofunk"
  // avatarUrl="http://www.gravatar.com/avatar?d=identicon"
   />, container)