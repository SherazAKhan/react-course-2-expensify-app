"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

///////////////////////////////////// React Components using Classes ///////////////////////////////////////////
var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePickOption = _this.handlePickOption.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);

    _this.state = {
      options: []
    };
    return _this;
  }
  //Triggered when App Mounts / Places


  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        //When the Application Mounts, it will fetch data from Local Storage and stores it in
        //Options Array
        var json = localStorage.getItem("options");
        var options = JSON.parse(json);

        //Retrieves Data only if Data is there
        if (options) {
          this.setState(function () {
            options;
          });
        }
      } catch (e) {
        //Do Nothing in case if data is not valid
      }
    }
    //Triggered when props value changes

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      //Saving Data to Local Storage only if
      //Options String changes
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
    //Triggered when the component goes away like when we close one page from our site,
    //it goes away, we can write code here on closing that page

  }, {
    key: "componentWillUnMount",
    value: function componentWillUnMount() {}
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) return "Enter an Option to be Added in the list!";else if (this.state.options.indexOf(option) > -1) return "This Option already exists";
      //Reduing Code
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
      // this.setState((prevState) => {
      //   return {
      //     options: prevState.options.concat(option),
      //   };
      //});
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      //With the help of filter function we are able to find and remove any element
      //Filter compares each element of Array with the element to be removed and returns
      //true / false if element is found/not found. If not found, element is placed in an Array Again
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
      //Instead of this
      // this.setState(() => {
      //   return {
      //     options: [],
      //   };
      // });
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      //Reducing Code with the help of Arrow Functions furthermore
      //Use this Code
      this.setState(function () {
        return { options: [] };
      });
      //Instead of this
      // this.setState(() => {
      //   return {
      //     options: [],
      //   };
      // });
    }
  }, {
    key: "handlePickOption",
    value: function handlePickOption() {
      var randomNumber = Math.floor(Math.random() * this.state.options.length);
      var pickedOption = this.state.options[randomNumber];
      alert(pickedOption);
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Indecision Application";
      var subtitle = "Put your life in the hands of a comptuer";
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          handlePick: this.handlePickOption,
          hasOptions: this.state.options.length > 0
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
          //handleAddOption={this.handleAddOption}
          , handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         {/*Use of Props */}
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }
//Stateless Function Version of Action
var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { disabled: !props.hasOptions, onClick: props.handlePick },
      "What should i do?"
    )
  );
};
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           disabled={!this.props.hasOptions}
//           onClick={this.props.handlePick}
//         >
//           What should i do?
//         </button>
//       </div>
//     );
//   }
// }
//Statelss Function for Options Class
var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove All"
    ),
    React.createElement(
      "p",
      null,
      props.options.map(function (option) {
        return React.createElement(Option, {
          key: option,
          optionText: option,
          handleDeleteOption: props.handleDeleteOption
        });
      })
    )
  );
};

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         <p>
//           {this.props.options.map((option) => (
//             <Option key={option} optionText={option} />
//           ))}
//         </p>
//       </div>
//     );
//   }
// }
//Stateless Function for Option
var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "span",
      { key: props.option },
      props.optionText,
      " "
    ),
    React.createElement(
      "button",
      {
        onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        }
      },
      "Remove"
    )
  );
};
// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <p key={this.props.option}>{this.props.optionText}</p>
//       </div>
//     );
//   }
// }

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);

    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();

      var newOption = e.target.elements.option.value;

      var error = this.props.handleAddOption(newOption.trim());
      e.target.elements.option.value = "";

      //Reducing Codd Size
      this.setState(function () {
        return { error: error };
      });
      // this.setState(() => {
      //   return {
      //     error: error, //or we can write only error because we have built-in property in ES6
      //   };
      // });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error,
          " : "
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// //Stateless Functinal Components
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
