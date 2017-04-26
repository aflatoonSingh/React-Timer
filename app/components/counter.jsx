var React = require('react');


var Counter = React.createClass({
    
    
   
    onFormSubmit: function(e){
        e.preventDefault();
        var strSeconds = this.refs.userinput.value;
        console.log(strSeconds,'strSeconds')
        
        if(strSeconds.match(/^[0-9]*$/)){
            this.refs.userinput.value = '';
            this.props.onSetCountdown(parseInt(strSeconds,10));
        }
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