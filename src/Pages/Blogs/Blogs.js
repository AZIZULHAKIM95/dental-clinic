import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <div>
                <h2>DIFFERENCE BETWEEN AUTHENTICATION and AUTHORIZATION.</h2>

                <br />
                <br />

                <p>
                    <h4>AUTHENTICATION:</h4>
                    <ul>
                        <li>In Authentication the identity of users are checked for providing the access to the system.</li>
                        <li>In this process users or persons are verified through passwords, biometrics, one-time pins, or apps.</li>
                        <li>It is visible to and partially changeable by the user.</li>
                        <li>Authentication is the first step of authorization so always comes first.</li>
                    </ul>
                </p>
                <p>
                    <h4>AUTHORIZATION:</h4>
                    <ul>
                        <li>In authorization process persons or users authorities are checked for accessing the resources.</li>
                        <li>It is Verifies through settings maintained by security teams.</li>
                        <li>Authorization is not visible to or changeable by the user.</li>
                        <li>Authorization is done after successful authentication.</li>
                    </ul>
                </p>
            </div>

            <br />
            <br />
            <br />

            <div>
                <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>

                <br />
                <br />

                <p>Firebase seen as a server-less backend for mobile apps, web apps and many others. It is a service provided by Google. Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration. It's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others.</p>
                <p>
                    There has many other option to implement authentication
                    <ul>
                        <li>Back4App.</li>
                        <li>AWS Amplify.</li>
                        <li>Kuzzle.</li>
                        <li>Couchbase.</li>
                        <li>NativeScript.</li>
                        <li>RxDB.</li>
                        <li>Flutter.</li>
                    </ul>
                </p>
            </div>

            <br />
            <br />
            <br />

            <div>
                <h2>What other services does firebase provide other than authentication?</h2>

                <br />
                <br />

                <p>There are many services which Firebase provides. Most useful of them are:
                    <ul>
                        <li>Cloud Firestore.</li>
                        <li>Cloud Functions.</li>
                        <li>Hosting.</li>
                        <li>Cloud Storage.</li>
                        <li>Google Analytics.</li>
                        <li>Predictions.</li>
                        <li>Cloud Messaging.</li>
                        <li>Dynamic Links.</li>
                        <li>Remote Config.</li>
                    </ul>
                </p>
            </div>

        </div>
    );
};

export default Blogs;