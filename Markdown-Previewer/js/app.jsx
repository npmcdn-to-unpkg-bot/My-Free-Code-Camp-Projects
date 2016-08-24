class App extends React.Component {
    constructor() {
        super();
        this.state = {markup: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n\n\n A Link: [Joseph Vega](https://freecodecamp.com/thejosephvega)'};
        this.setMarkup = this.setMarkup.bind(this);
    }
    getMarkup() {
        return {__html: marked(this.state.markup)};
    }
    setMarkup(value) {
        this.setState({markup: value});
    }
   render() {
       return (
           <div className="row">
               <div className="col-md-6">
                    <MarkdownInput value={this.state.markup} setMarkup={this.setMarkup} />
               </div>
                 <div className="col-md-6">
                     <div className="panel panel-default">
                         <div id="output" class="panel-body" dangerouslySetInnerHTML={this.getMarkup()}></div>
                     </div>     
               </div> 
           </div>
       );
   } 
}

class MarkdownInput extends React.Component {
    constructor() {
        super();
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    handleTextChange(e) {
        this.props.setMarkup(e.target.value);
    }
    render() {
        return (
            <textarea rows="25" cols="70" value={this.props.value} onChange={this.handleTextChange}>
            </textarea>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));