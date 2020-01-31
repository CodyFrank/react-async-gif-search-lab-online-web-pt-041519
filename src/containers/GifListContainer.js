import React from 'react'

import GifSearch from '../components/GifSearch'

import GifList from '../components/GifList'

export default class GifListContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            gifs: []
        }
    }

    fetchGifs = (query = "YOUR QUERY HERE") => {
        return fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=9Pu678JEHZNczXHOUMHaYIUtqDqwx0mS&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            let i
            let gifs = []
            for(i = 0; i < 3; i++){
                let gif = data.data[i]
                gifs.push(gif)
            }
                this.setState({
                    gifs: gifs
                })
        })
    }

    componentDidMount(){
        this.fetchGifs()
    }

    render(){
        return(
            <div>
                <GifSearch handleSubmit={this.fetchGifs}/>
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}