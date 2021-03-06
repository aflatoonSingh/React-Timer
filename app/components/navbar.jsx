var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navbar = React.createClass({
   render:function(){
       return(
        <div className='container'>
            <div className='containerLinks'>React-Timer-App</div>
            <IndexLink to='/' className='containerTimerCount' >Timer</IndexLink>
            <IndexLink to='/CountDownComp' className='containerTimerCount'>CountDown</IndexLink>
        </div>
       );
   } 
});

module.exports = Navbar;