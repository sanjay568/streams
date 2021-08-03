import React from 'react';
import { connect } from 'react-redux';
import { trySignIn, trySignOut } from '../actions';

class GoogleAuth extends React.Component {
   
    auth = null;

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '593736152125-mvoggrns3l4hoo26k754vln9d7cv9vp0.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        const status = this.auth.isSignedIn.get();
        console.log(this.auth.currentUser.get().getId());
        if(status) {
            this.props.trySignIn(this.auth.currentUser.get().getId());
        }
        else {
            this.props.trySignOut();
        }
    }

    signedOut(){
         this.auth.signOut();
        //this.props.trySignOut();
    }

    signIn() {
   
        this.auth.signIn();
       // this.props.trySignIn();
        
    }

    renderAuthButton() {
        console.log(this.props);

         if(this.props.isSign) {
            return  <button className='ui red google button' onClick={() => this.signedOut()}>
            <i className='google icon' /> Sign Out
        </button>
        }
        else {
            return <button className='ui green google button' onClick={() => this.signIn()}>
                <i className='google icon'/> Sign In
            </button>
        }
    }

    render() {
        
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        isSign: state.auths.isSignedIn
    }
}

export default connect(mapStateToProps,{ trySignIn ,trySignOut })(GoogleAuth)