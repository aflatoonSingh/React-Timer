var React = require('react');

var Timer = React.createClass({
   render:function(){
       return(
           <div>
               <button className='buttonTimer'>Timer</button>
               <button className='buttonTimer'>Count Down</button>
           
           </div>
       
       );
   } 
});

module.exports = Timer;
