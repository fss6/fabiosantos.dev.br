import React, { Component } from 'react'
import Menu from './Menu'


export default class Template extends Component {

    activeMenu = (menuItem) => {
        return this.props.activeMenu === menuItem ? 'active' : ''
    }

    render() {
        return (
            <div className="mi-wrapper">
                
                <nav className="mi-header">
                    <Menu />
                    <div className="mi-header-inner">
                        <div className="mi-header-image">
                            <a href="/"><img alt="brandimage" src="/static/image/profile.png" /></a>
                        </div>
                        <ul className="mi-header-menu">
                            <li>
                                <a aria-current="page" className={this.activeMenu('home')} href="/#/">
                                    <span>Página Inicial</span>
                                </a>
                            </li>
                            <li>
                                <a href="/#/resume" className={this.activeMenu('resume')}><span>FORMAÇÃO ACADÊMICA</span></a>
                            </li>
                            <li>
                                <a href="/#/unifbv" className={this.activeMenu('unifbv')}><span>UniFBV</span></a>
                            </li>
                        </ul>
                        <p className="mi-header-copyright">
                            <span className="gray-color">© 2019 </span> 
                            <b>
                                <a rel="noopener noreferrer" href="/">Fabio Santos</a>
                            </b>
                        </p>
                    </div>
                </nav>
                <div className="mi-home-area mi-padding-section">
                    
                    <div className="mi-home-particle content-bg"></div>
                    
                    <div className="container my-padding-top mb-5">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}