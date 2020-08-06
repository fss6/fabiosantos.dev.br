import React, { Component } from 'react'
import Template from '../Template';
import { Chip } from '@material-ui/core'
import { FaCalendarAlt } from 'react-icons/fa';


export default class Unifbv extends Component {
    render() {
        return (
            <Template activeMenu="unifbv">
                <div className="mi-sectiontitle">
                    <h2>UNIFBV</h2>
                </div>
                <div className="mi-contact-infoblock">
                    <div className="mi-contact-infoblock-content">
                        <h6>Período Atual</h6>
                        <Chip
                            icon={<FaCalendarAlt />}
                            label="2020.2" 
                            component="a"
                            color="primary"
                            href={"/#/unifbv/2020.2"} 
                            clickable/>
                    </div>
                </div>
                <div className="mi-contact-infoblock">
                    
                    <div className="mi-contact-infoblock-content">
                        <h6>Períodos Anteriores</h6>
                        {[ '2020.1', '2019.2'].map((year) =>
                            <Chip 
                                label={year} 
                                component="a" 
                                href={"/#/unifbv/" + year} 
                                style={{ marginRight: 10}}
                                clickable/>
                        )}
                    </div>
                </div>
            </Template>
        )
    }
}