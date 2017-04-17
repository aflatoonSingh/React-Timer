var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var Navbar = require('Navbar');
var Timer = require('Timer');
var Counter = require('Counter');

var {Router, Route, IndexRoute, hashHistory} = require('react-router');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path='timer' component={Timer}></Route>
            <Route path='counter' component={Counter}></Route>
            
        </Route>
    </Router>,
    document.getElementById('app')
);