var TestReminder = React.createClass({
        getInitialState:function(){
                return{
                    reminderText: []
                };
        },
        handled:function(){
                var newMassage = ReactDOM.findDOMNode(this.refs.addTextReminder).value;
                var newMassages = this.state.reminderText.concat([newMassage]); 
                this.setState({
                    reminderText :newMassages
                });
        },
        render:function(){

              var articles = this.state.reminderText.map(function(article){
                    return <MessagViewReminder reminderCurentText = {article} />;
                });
            return(
                <div className="testReminder">
                    <h2> Rest testReminder </h2>
                    <input type="text" ref="addTextReminder" />
                    <input type="button" className="btn" name="addReminderButton" onClick={this.handled} value="Add New Text Reminder" />
                    
                    <ul>
                       {articles}
                     </ul>   
                </div>    
            ) ;
        }
});

var MessagViewReminder = React.createClass({
        render:function(){
            return (
                <li className="section">
                    <p>{this.props.reminderCurentText}</p>
                </li>
            );
        }
});

ReactDOM.render(<TestReminder/>,document.getElementById('testReminderNow'));

