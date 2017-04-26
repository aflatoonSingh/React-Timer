var React = require('react');

var Countdownform = React.createClass({
    
    submitForm: function(e){
        e.preventDefault();
        //console.log(this.refs)
        var strSeconds = this.refs.seconds.value;
        
        console.log(strSeconds,'strSeconds')
        
        if(strSeconds.match(/^[0-9]*$/)){
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds,10));
        }
    },
    render: function(){
        return (
            <form onSubmit={this.submitForm}>
                <input type='number' ref='seconds'/>
                <button>Start</button>
            </form>
        );
    }
});

module.exports = Countdownform;