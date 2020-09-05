import React from 'react';
import { Page } from '../components/Page';

export const Login = () => {
    return (
        <Page>
            <h1 className="Login-title">LOGIN TO ACCESS YOUR DASHBOARD</h1>

            <form className="Login-form-wrapper">
                <div className="form-group">

                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"

                    />
                </div>

                <div className="form-group">

                    <input
                        type="password"
                        name="password"
                        placeholder="Your password"

                    />
                </div>

                <button className="btn" type="submit">
                    Login
                </button>
            </form>

        </Page>
    )
}
