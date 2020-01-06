import React from 'react';
import Nav from '../../components/nav';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav />
                Login page
            </div>
        )
    }
}

export default Login;