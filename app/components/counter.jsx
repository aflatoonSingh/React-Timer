var React = require('react');


var Counter = React.createClass({
   
    render:function(){
        return(
        
            <div>
                <input className='userInput' type='number' placeholder='Enter your start time' ref='userinput'/><br/>
                <button className='buttonStartTimer'>Start Timer</button>
            </div>
        );
    }
});

module.exports = Counter;