import React, { Component } from 'react'
import Period from './Period'


export default class A2019S2 extends Component {
    render() {
        return (
            <Period period="2020.1">
                {/* TODO */}
                <div className="mi-resume">
                    <div className="mi-resume-summary">
                        <h6 className="mi-resume-year">TODO</h6>
                    </div>
                    <div className="mi-resume-details">
                        <h5>TODO</h5>
                        <div className="gray-color">
                            <div className="mi-about-content">
                                <ul>
                                    <li>
                                        <b className="white-color">Aulas</b> 
                                        <a href="/" target="_blank" rel="noopener noreferrer">
                                            TODO
                                        </a> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Period>
        )
    }
}