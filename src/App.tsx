import React from "react";
import "./App.scss";
import img from "./assets/react-webpack-ts.png";

const environment = process.env.NODE_ENV;
 const App: React.FC<{}> = () => {
    return (
        <>
            <div className="center">
                <h1>Hello World!</h1>
            <img src={img} className="logo" alt="react-webpack-ts"></img>
            </div>
        </>
    );
};

export default App;
