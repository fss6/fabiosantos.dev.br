import React, { Component } from 'react'
import Template from './Template'


export default class Resume extends Component {
    render() {
        return (
            <Template activeMenu="resumes">
                <div className="mi-sectiontitle">
                    <h2>FORMAÇÃO ACADÊMICA</h2>
                </div>
                
                <div className="mi-resume-wrapper">
                    <div className="mi-resume mt-30">
                        <div className="mi-resume-summary">
                            <h6 className="mi-resume-year">2014 - 2016</h6>
                        </div>
                        <div className="mi-resume-details">
                            <h5>MESTRADO EM CIÊNCIA DA COMPUTAÇÃO</h5>
                            <h6 className="mi-resume-company">UNIVERSIDADE FEDERAL DE PERNAMBUCO - UFPE</h6>
                            <div className="gray-color">
                                <p>Título: Um verificador de modelos em K para um subconjunto da linguagem Circus</p>
                                <small>Keywords: Circus. Model checker. Analysis. K-Framework. Operational semantics. SMT</small>
                            </div>
                        </div>
                    </div>
                    <div className="mi-resume mt-30">
                        <div className="mi-resume-summary">
                            <h6 className="mi-resume-year">2013 - 2013</h6>
                        </div>
                        <div className="mi-resume-details">
                            <h5>APERFEIÇOAMENTO EM ENGENHARIA DE SOFTWARE</h5>
                            <h6 className="mi-resume-company">UNIVERSIDADE FEDERAL DE PERNAMBUCO - UFPE</h6>
                            <p className="gray-color">Título: OracleKMS - A Tool for Knowledge Management.</p>
                        </div>
                    </div>
                    <div className="mi-resume mt-30">
                        <div className="mi-resume-summary">
                            <h6 className="mi-resume-year">2009 - 2013</h6>
                        </div>
                        <div className="mi-resume-details">
                            <h5>GRADUAÇÃO EM COMPUTAÇÃO</h5>
                            <h6 className="mi-resume-company">UNIVERSIDADE FEDERAL RURAL DE PERNAMBUCO - UFRPE</h6>
                        </div>
                    </div>
                </div>
            </Template>
        )
    }
}