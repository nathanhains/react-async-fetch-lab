import React from 'react'
export default class App extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
    }
    render(){

    }
}
