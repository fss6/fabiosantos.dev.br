import React, { Component } from 'react'
import Template from '../Template';

export default class Period extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: {
                disciplines: []
            }
        }
    }

    componentDidMount() {
        let url = "/data/unifbv/" + this.props.period + ".json"
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({data: data}))
        .catch(error => {
            window.open('/404', "_self")
        })
    }

    render() {
        return (
            <Template activeMenu="unifbv">
                <div className="mi-sectiontitle mt-1 mt-sm-5">
                    <h2>UNIFBV {this.props.period}</h2>
                </div>
                <div className="mi-resume-wrapper">
                    {this.state.data.disciplines.map((discipline, i) =>
                        <div className="mi-resume" key={i}>
                            <div className="mi-resume-summary">
                                <h6 className="mi-resume-year">{discipline.codes}</h6>
                            </div>
                            <div className="mi-resume-details">
                                <h5>{discipline.name}</h5>
                                <h6 className="mi-resume-company">{discipline.subtitle}</h6>
                                <div className="gray-color">
                                    <div className="mi-about-content">
                                        <ul>
                                            {discipline.items.map((item, j) =>
                                                <li key={j}>
                                                    <b className="white-color">{item.title}</b> 
                                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                        { item.subtitle ? item.subtitle : item.url }
                                                    </a> 
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Template>
        )
    }
}