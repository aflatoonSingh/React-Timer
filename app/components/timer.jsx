var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
   render:function(){
       return(
           <div>
               <Clock totseconds = {129}/>
               <button className='buttonTimer'>Timer</button>
               <button className='buttonTimer'>Count Down</button>
           
           </div>
       
       );
   } 
});

module.exports = Timer;
