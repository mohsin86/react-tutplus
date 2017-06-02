 var Greeting = React.createClass({
        render: function() {
          return (
            <p>Greeting is  {this.props.message}</p>
          );
        }
      });

      setInterval(function() {
          var messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe'];
        //  var randomMessage = messages[Math.floor((Math.random()*3))];
          
           var randomMessage = messages[Math.floor((Math.random() * 3))];
            ReactDOM.render(
                <Greeting message={randomMessage} />,
                document.getElementById('app')
            );
      },1000);