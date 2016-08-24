"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var App = function(_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);
        var _this = _possibleConstructorReturn(this, _React$Component.call(this));
        _this.state = {
            markup: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n\n\n A Link: [Joseph Vega](https://freecodecamp.com/thejosephvega)'
        };
        _this.setMarkup = _this.setMarkup.bind(_this);
        return _this;
    }
    App.prototype.getMarkup = function getMarkup() {
        return {
            __html: marked(this.state.markup)
        };
    };
    App.prototype.setMarkup = function setMarkup(value) {
        this.setState({
            markup: value
        });
    };
    App.prototype.render = function render() {
        return React.createElement("div", {
            className: "row"
        }, React.createElement("div", {
            className: "col-md-6"
        }, React.createElement(MarkdownInput, {
            value: this.state.markup,
            setMarkup: this.setMarkup
        })), React.createElement("div", {
            className: "col-md-6"
        }, React.createElement("div", {
            className: "panel panel-default"
        }, React.createElement("div", {
            id: "output",
            "class": "panel-body",
            dangerouslySetInnerHTML: this.getMarkup()
        }))));
    };
    return App;
}(React.Component);
var MarkdownInput = function(_React$Component2) {
    _inherits(MarkdownInput, _React$Component2);

    function MarkdownInput() {
        _classCallCheck(this, MarkdownInput);
        var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this));
        _this2.handleTextChange = _this2.handleTextChange.bind(_this2);
        return _this2;
    }
    MarkdownInput.prototype.handleTextChange = function handleTextChange(e) {
        this.props.setMarkup(e.target.value);
    };
    MarkdownInput.prototype.render = function render() {
        return React.createElement("textarea", {
            rows: "25",
            cols: "70",
            value: this.props.value,
            onChange: this.handleTextChange
        });
    };
    return MarkdownInput;
}(React.Component);
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));