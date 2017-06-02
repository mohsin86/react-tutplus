 // Main Class
 var StateComponent = React.createClass({
    getInitialState:function(){
        return { 
            message: 'This is Initial State',
            isVisible:true,
            articles:[
                  'this is article one',
                  'this is article two',
                  'this is article three',
                  'this is article four',
                  'this is article five',
            ]
        };
    },
    onClick:function(){
         var messages = ['2nd State', '3rd State', '4th State'];
           var randomMessage = messages[Math.floor((Math.random() * 3))];
           this.setState({
                message: "This is "+randomMessage ,
                isVisible: this.state.isVisible ? false:true
            });
    },
    handleAdd:function(e){
        var newMassage = ReactDOM.findDOMNode(this.refs.newMassage).value;
        var newMassages = this.state.articles.concat([newMassage]); 
        this.setState({
            articles :newMassages
        });
    },
    render:function(){
        var inLineStyle ={
            display: this.state.isVisible ? 'block':'none' 
        }
        var articles = this.state.articles.map(function(article){
            return <ArticleView article = {article} />;
        });
        return(
            <div>
                <MessageView message ={this.state.message}/>
                <p><input type="button" onClick={this.onClick} value="Change Message" /></p>
                <div style={inLineStyle} > Display block </div>
                <div> 
                  Synthatic Event
                  <input type="text" ref="newMassage" />
                  <input type="button" className="btn" value="Add Message" name="Add-Message" onClick={this.handleAdd} />
                </div>
                 <div><h2>Article Number </h2> </div>
                {articles}
            </div>    
        );
    }

});

// Initiated by Mian Class
var MessageView = React.createClass({
    render:function(){
        return (
           <p> {this.props.message} </p>
        );
    }
});


// Initiated by Mian Class
var ArticleView = React.createClass({
    getDefaultProps:function(){
        return { article: 'this is default Props' }
    },
  render:function(){
    return (
      <p> {this.props.article} </p>
    )
  }
});

ReactDOM.render(<StateComponent/>, document.getElementById('state'));  
