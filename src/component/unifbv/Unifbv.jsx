import React, { Component } from 'react'
import Template from '../Template';
import { FaCalendarCheck, FaCalendarAlt, FaLink } from 'react-icons/fa';


export default class Unifbv extends Component {
    render() {
        return (
            <Template activeMenu="unifbv">
                <div className="mi-sectiontitle">
                    <h2>UNIFBV</h2>
                </div>
                <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon white-color">
                        <FaCalendarAlt />
                    </span>
                    <div className="mi-contact-infoblock-content">
                        <h6 className="blue-color">Período Atual</h6>
                        <p><a href="/#/unifbv/2020.1">
                                <FaLink /> 2020.1
                            </a>
                        </p>
                    </div>
                </div>
                <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon white-color">
                        <FaCalendarCheck />
                    </span>
                    <div className="mi-contact-infoblock-content">
                        <h6 className="blue-color">Períodos Anteriores</h6>
                        <p className="mb-1">
                            <a href="/#/unifbv/2019.2">
                                <FaLink /> 2019.2
                            </a>
                        </p>
                    </div>
                </div>
            </Template>
        )
    }
}