import React from 'react'
import { withRouteData } from "react-static";
import Header from '../components/Header'
import styled from '@emotion/styled'



export default withRouteData(() => (
    <main>
        <Header 
            headline="Testing your React application with Jordyn" 
            subhead="Power up your JavaScript skills today." 
        />
        <section>
            <h2>Learn awesome technologies to help your coding career like:</h2>
            <ul>
                <li>Jest</li>
                <li>React Testing Library</li>
            </ul>
            <h2>Learn techniques like:</h2>
            <ul>
                <li>Unit testing</li>
                <li>Integration testing</li>
                <li>Test-driven development</li>
            </ul>
        </section>
        <section>
            <h2>Who is it for?</h2>
            <p>This workshop is for developers <strong>comfortable</strong> with React and JavaScript; please be aware that it's heavily recommended to have at least six months to a year of experience working with React and JavaScript before signing up for this course.</p>
        </section>
        <section>
            <h2>Interested? Sign-up for more updates:</h2>
            <form>
                <label htmlFor="signup-form__name">
                    Name
                    <input type="text" id="signup-form__name" />
                </label> 
                <label htmlFor="signup-form__email">
                    E-mail
                    <input type="text" id="signup-form__email" />
                </label> 
            </form>
        </section>
    </main>
))