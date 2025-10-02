import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id:"heading"}, "Namaste React");

//JSX => JavaScript + XML like Syntax (Transpiler converts JSX to React.createElement)
//Transpiler is done by Babel and parcel
//Babel is a transpiler that converts JSX to React.createElement
//Parcel is a bundler that bundles the code into a single file
//Parcel is also a server that serves the bundled code
//Parcel is also a dev server that serves the code and watches for changes
//Parcel is also a production server that serves the bundled code
//Parcel is also a production server that serves the bundled code
const headingJSX = (
<h1 className="head" tabIndex="5" id="heading">
    Namaste React from JSX multiline
</h1>
);

// React funtional component

const Title = () => (
    <h1 className="head" tabIndex="5" id="heading">
        Namaste React from JSX functional component Title
    </h1>
)

// Component composition
const HeadingComponent = () => {
    return (
        <div>
        <Title />
        <h1 className="head" tabIndex="5" id="heading">
            Namaste React from JSX functional component 
        </h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);