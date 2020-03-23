console.log('app.js is running!')

var template = <p>this is a jsx from app.js!!</p>

var templateTwo = (
    <div>
        <h1>Neil</h1>
        <p>Age: 30</p>
        <p>Location: Macao</p>
    </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)