import React, { Component } from 'react'
import { FaHome } from 'react-icons/fa';

export default class PageNotFound extends Component {
    render() {
        return (
            <div className="mi-wrappers">
                
            <div className="mi-home-area mi-padding-section">
                
                <div className="mi-home-particle content-bg"></div>
                
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-12">
                        <div className="mi-home-content">
                            <h1 className="blue-color">404 error</h1>
                            <h4 className="white-color">We are sorry but the page are looking for does not exist.</h4>
                            <ul className="mi-socialicons">
                                <li className="gray-color" >
                                    <a href="/"><FaHome size="1em"/> Back to Home</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}