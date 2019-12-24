import React, { Component } from 'react'
import { FaGithub, FaLinkedin,  } from 'react-icons/fa';
import Template from './Template';


export default class Home extends Component {
    render() {
        return (
            <Template activeMenu="home">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-12">
                        <div className="mi-home-content">
                            <h1>FABIO SANTOS</h1>
                            <div className="gray-color">
                                <h4 className="color-theme">Mestre em Ciência da Computação</h4>
                                <span>Áreas de interesse: Engenharia de Software, DevOps, Linguagens Formais e Autômatos</span>
                            </div>
                            <ul className="mi-socialicons">
                                <li>
                                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/f%C3%A1bio-santos-5a406831">
                                        <FaLinkedin size="2em"/>
                                    </a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/fss6">
                                        <FaGithub size="2em"/>
                                    </a>
                                </li>
                                <li className="img-icon" style={{ 'backgroundColor': '#a4acc4', 'padding': '1px', 'borderRadius': '4px' }}>
                                    <a rel="noopener noreferrer" href="http://lattes.cnpq.br/1751447780077596" target="_blank">
                                        <img src="/static/image/lattes.png" alt="Lattes icon" style={{ 'height': "1.7em", 'width': "1.8em"  }} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Template>
        )
    }
}