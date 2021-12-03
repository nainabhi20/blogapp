import React from 'react';
import Showblogs from './MyComponents/showblogs'
import Addblog from './MyComponents/addnewblog';
import BlogView from './MyComponents/BlogView';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,Routes
} from 'react-router-dom';
import blogData from './MyComponents/Blogs.json'
import './App.css';
function App() {
  let data=blogData.data;
  let j=0;
  return (
    <>
    <Router>
        <NavLink exact activeClassName='active' className='Link' to='/'>Show All Blogs</NavLink>
    <NavLink exact activeClassName='active' className='Link' to='/add'> Add New Blog</NavLink>
        <Routes>
        <Route exact path='/' element={<Showblogs/>}/>
        <Route exact path='/add' element={<Addblog/>}/>
        {data.map((val)=>{
                let path='/blognumber'+j;
                j++;
                return (<Route  path={path} element={<BlogView title={val.title} cate={val.category} content={val.content}/>}/>);
            })}
        </Routes>
        </Router>
    </>
  );
}

export default App;
