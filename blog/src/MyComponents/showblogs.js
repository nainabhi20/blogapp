import React from "react";
import blogData from './Blogs.json';
import './showblogs.css'
import BlogView from "./BlogView";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,Routes
  } from 'react-router-dom';
  export default class Showblogs extends React.Component{
      constructor(props){
          super(props);
      }
      render(){
          let data=blogData.data;
          let i=0;
          let j=0;
          return(
            <div className="blogscontainer">
            
            {data.map((val)=>{
                let path='/blognumber'+i;
                i++;
                return (<div className="Bloglink"><NavLink to={path} activeClassName='active1' className='link1'>{val.title}</NavLink><br/></div>);
            })}
            
         
           
       </div>
          );
      }
  }