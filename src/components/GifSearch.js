import React from 'react'

export default class GifSearch extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: "search"
        }
    }


    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state.text)
    }


    render(){
        return(
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input 
                    type="text"
                    onChange={e => this.handleTextChange(e)}
                    value={this.state.text}
                    ></input>
                    
                    <input type="submit"/>

                </form>
            </div>
        )
    }
}