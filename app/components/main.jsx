var React = require('react');
var Navbar = require('Navbar');
var Timer = require('Timer');
var CountDown = require('Countdown');



var Main = React.createClass({
    render:function(){
        return(
            <div className='containerMainComp'>
            <Navbar/>
            <div className='mainCompCon'>
                <h1>Main Components</h1>
                {this.props.children}
            
            </div>
            
            </div>
            
        );
    }
});

module.exports = Main;