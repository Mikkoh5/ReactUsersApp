import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to= "/user">User</Link>
            </div>

            <Switch>
                <Route exact path="/">
                </Route>
                <Route path="/user"></Route>
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('user'));