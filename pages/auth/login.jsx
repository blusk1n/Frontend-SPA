import React from 'react';
import Nav from '../../components/nav';
import  MainL from "../../layouts/main"

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MainL>
                    <form action="">
                        <input type="text"/>
                    </form>
                 </MainL>
            
            </div>
        )
    }
}

export default Login;