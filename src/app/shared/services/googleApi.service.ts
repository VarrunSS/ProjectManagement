import { Injectable } from '@angular/core';


declare var gapi: any;

@Injectable()
export class GoogleApiService {

    constructor() { }

    cars = ["a", "b", "c"];

    that = this;

    handleClientLoad() {
        // Loads the client library and the auth2 library together for efficiency.
        // Loading the auth2 library is optional here since `gapi.client.init` function will load
        // it if not already loaded. Loading it upfront can save one network request.

        gapi.load('client:auth2', this.initClient);
    }

    initClient() {
        // Initialize the client with API key and People API, and initialize OAuth with an
        // OAuth 2.0 client ID and scopes (space delimited string) to request access.
        // var $this = this;
        gapi.client.init({
            apiKey: 'AIzaSyAyrHYAKkP4LEzmHyZRoRsMLD4jb3jPugY',
            discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/prediction/v1.6/rest"],
            clientId: '1005654991008-pqr65onmjadkitj2op1f32c6h2divudj.apps.googleusercontent.com',
            scope: 'https://www.googleapis.com/auth/prediction'
        }).then(function () {
            // Listen for sign-in state changes.
            gapi.auth2.getAuthInstance().isSignedIn.listen(
                v => {
                    // Handle the initial sign-in state.
                    if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
                        console.log('signed in!');
                    }
                }
            );

        });
    }

    updateSigninStatus(isSignedIn) {
        // When signin status changes, this function is called.
        // If the signin status is changed to signedIn, we make an API call.
        if (isSignedIn) {
            console.log('signed in!');
        }
    }
    handleSignInClick(event) {
        // Ideally the button should only show up after gapi.client.init finishes, so that this
        // handler won't be called before OAuth is initialized.
        gapi.auth2.getAuthInstance().signIn();
    }

    handleSignOutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
        console.log('signed out successfully!');
    }

    myData() {
        return "hello";
    }
}