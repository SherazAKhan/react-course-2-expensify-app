"use strict";

var count = 0;
var addOne = function addOne() {
  count++;
};
var minusOne = function minusOne() {
  count--;
};
var reset = function reset() {
  count = 0;
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  var TemplateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "Reset"
    )
  );
  ReactDOM.render(TemplateTwo, appRoot);
};
renderCounterApp();
