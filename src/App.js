import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {GlobalStyles} from "./components/styled/GlobalStyles";



import MoviesList from "./pages/MoviesList";
import Header from "./components/Layouts/Header";
import Movie from "./pages/Movie";

function App() {
    return (
        <Router>
            <GlobalStyles/>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <MoviesList/>
                </Route>
                <Route exact path="/:Movie">
                    <Movie/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
