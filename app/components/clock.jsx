var React = require('react');

var Clock = React.createClass({
    getDefaultProps: function(){
        totseconds: 5 
    },
    
    propTypes:{
        totseconds: React.PropTypes.number
    },
    formatSeconds : function(totseconds){
        var seconds = totseconds % 60;
        var minutes = Math.floor(totseconds / 60);
        debugger;
        if(seconds<10){
            seconds = '0' + seconds;
        }
        debugger;
        if(minutes<10){
            minutes = '0' + minutes;
        }
       
      return minutes + ":" + seconds;
    },
    render:function(){
        console.log(this.props)
        var {totseconds} = this.props;
        return(
            <div className='clockCircle'>
                <span className='timerNumbers'>
                    {this.formatSeconds(totseconds)}
                </span>
            </div>
        
        );
    }
});

module.exports = Clock;