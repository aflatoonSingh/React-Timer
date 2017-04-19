var React = require('react');


var Counter = React.createClass({
    
    
   
    onFormSubmit: function(e){
        e.preventDefault();
        var hello = this.refs.userinput.value;
        console.log(hello)
    },
    render:function(){
    
        return(
        
            
                <form onSubmit={this.onFormSubmit}>
                <input className='userInput' type='number' placeholder='Enter your start time' ref='userinput'/><br/>
                <button className='buttonStartTimer'>Start Timer</button>
                </form>
                
        );
    }
});

module.exports = Counter;