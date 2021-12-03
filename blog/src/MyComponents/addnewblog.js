import React from "react";
import './addblog.css'
export default class Addblog extends React.Component{
    constructor(props){
        super(props);
        this.state={title:'',cate:'',content:''}
    }
    render(){
        return(
            <>
            <div>
            <form  className='formContainer'>
                <fieldset>
                    <legend style={{color:'white'}}>Enter your Details here</legend>
                <input placeholder="Enter the title" className='input' value={this.state.title} onChange={(e)=>{this.setState({title:e.target.value})}}/><br/>
                <input placeholder="Enter the title" className='input' value={this.state.cate} onChange={(e)=>{this.setState({cate:e.target.value})}}/><br/>
                <textarea placeholder="Enter the title" className='input' value={this.state.content} onChange={(e)=>{this.setState({content:e.target.value})}}/><br/>
                <input type='submit' className='button' onClick={(e)=>{
                    e.preventDefault();
                    alert('Blog is added successfully and work will be  handled by the backend')
                }}/>
                <input type='reset' className='button' onClick={
                    ()=>{
                        this.setState({title:'',cate:'',content:''});
                    }
                }></input>
                </fieldset>
            </form>
            </div>
            </>
        );
    }
}