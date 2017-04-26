var React = require('react');

var Counter = require('Counter');
var Clock = require('Clock');
var CountDownForm = require('Countdownform');




var Countdown = React.createClass({
    
    getInitialState: function(){
      return {
          totalSeconds: 5,
          countdownStatus :'Stopped'
      };
},

componentDidUpdate: function(prevProps, prevState){
    console.log(prevState,'prevState');
    debugger;
    if(this.state.countdownStatus !==prevState.countdownStatus){
        debugger;
        switch(this.state.countdownStatus) {
               case 'Started':
                this.StartTimer();
                break;
                
        }
    }
    
},

StartTimer: function(){

    this.Timer = setInterval (() => {

       var newCount = this.state.totalSeconds - 1
       
       this.setState({
           totalSeconds : newCount >=0 ? newCount : 0
       });
    },1000);
},
handleNewInput: function(seconds){
    
    this.setState({
       totalSeconds: seconds,
        countdownStatus: 'Started'
    });
    
},

    
    render: function(){
        //console.log(this.state,'sate')
        var {totalSeconds} = this.state;
        return(
            <div>
                
             <Clock totseconds={totalSeconds}/>
             <CountDownForm onSetCountdown={this.handleNewInput}/>

            </div>
        );
    }
    
});

module.exports = Countdown;