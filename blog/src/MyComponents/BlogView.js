import React from "react";
import './BlogView.css'
export default class BlogView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <div class="BlogView">
                <div>
                    <h2>Title:- {this.props.title}</h2>
                    <h3>Categories:- {this.props.cate}</h3>
                    <h3 id="likes">Likes:-300</h3><h3 style={{cursor:'pointer'}} onClick={()=>{
                        document.getElementById('likes').innerHTML='Likes:- 301'
                    }}>👍</h3>
                    <button className="button" onClick={()=>{
                        alert("Share operartion will be handled")
                    }}>Share</button>
                </div>
                <div style={{backgroundColor:'whitesmoke',color:'black',padding:'1rem',borderRadius:'1rem'}}>
                    {this.props.content.map((val)=>{
                        return(<><h3>{val.heading}</h3><p>{val.data}</p></>)
                    })}
                </div>
            </div>
            </>

        );
    }

}