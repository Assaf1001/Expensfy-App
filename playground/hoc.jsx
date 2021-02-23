// Higher Order Componenet (HOC) - A componenet (HOC) that renders anther component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponenet) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponenet {...props} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponenet) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponenet {...props} />
            ) : (
                <p>Please login to view the info</p>
            )}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
    <AuthInfo isAuthenticated={true} info={"There are the details."} />,
    document.getElementById("root")
);
// ReactDOM.render(
//     <AdminInfo isAdmin={true} info={"There are the details."} />,
//     document.getElementById("root")
// );
