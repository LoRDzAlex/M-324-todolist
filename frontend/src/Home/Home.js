import logo from "../logo.svg";
import React from "react";

export const Home = () => {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>
                    Home
                </h1>
            </header>
            <body className="App-body">
            <p>Das ist der HomeScreen</p>
            </body>
        </div>
    );
}
export default Home