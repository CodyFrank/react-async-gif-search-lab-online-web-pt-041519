import React from 'react'

export default class GifList extends React.Component{

    renderLi = () => {
       return this.props.gifs.map((el) => {
           return <li key={el.images.original.url}><img src={el.images.original.url} alt=""></img></li>
        }
             )
    }

    render(){
        return(
            <div>
                <ul>
                    {this.renderLi()}
                </ul>
            </div>
        )
    }
}