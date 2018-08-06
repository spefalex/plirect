import React from 'react';

export default class LinkIcon extends React.Component{
    render(){
        return(

        <li className="ContactCol" >
            <a href={this.props.link}><span className={this.props.className}></span> {this.props.linkname}</a>
        </li>
        
        );
    }
}