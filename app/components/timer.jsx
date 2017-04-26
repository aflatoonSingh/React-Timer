var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
    setInitialState: function(){
        
        usercount: 0
    },
     handleNewCount: function(seconds){
         
         this.setState({
             usercount : seconds
         });
     },
   render:function(){
    console.log(this.props,'dd');
    var usercount = this.props.usercount;
       return(
           <div>
               <h1>Timer Component !! </h1>
           
           </div>
       
       );
   } 
});

module.exports = Timer;
