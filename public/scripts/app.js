console.log('app.js is running!')

// var template = <p>this is a jsx from app.js</p>

var appRoot = document.getElementById('app')
var template = /*#__PURE__*/React.createElement("p", {
    id: "someid"
  }, "hello world")

ReactDOM.render(template, appRoot)