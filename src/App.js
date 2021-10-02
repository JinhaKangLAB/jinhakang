/*eslint-disable*/
import React, { useState } from 'react';
import './App.css';
import background from './main.gif';
import main from './artist.jpg'
import { Link, Route, Switch} from 'react-router-dom';
import Artworks from './Artworks.js';

 
function App() {
  
  //let [title,changeTitle] = useState(['About','ArtWorks','Newport']);
  let [love, changeLove] = useState(0);
  let [click,clickChange] = useState(0);
  let [menu,changeMenu] = useState(['Home','About','Artworks','CV','Contact']);
  let [modal,changeModal] = useState(false);

  // function sorting(){
  //   var newArray = [...title];
  //   newArray[0] = ['Newport','Recommendations','Unrecommended'];
  //   changeTitle(newArray);
  // }
  
    return (
    <div className="App">
      <div className="black-background">
        <div className="love d-flex align-items-center">
          <img className="d-flex" src={background}/>
        </div>
      </div>
      <Route exact path="/">
        <div className="black-nav">
          <div>JINHA KANG</div>
        </div>
        <div className = "menu">
          <Link to ="/" style={{textDecoration: "none", color: "white"}}><h4>{menu[0]}</h4></Link>
          <Link to ="/about" style={{textDecoration: "none", color: "white"}}><h4>{menu[1]}</h4></Link>
          <Link to ="/artWorks" style={{textDecoration: "none", color: "white"}}><h4>{menu[2]}</h4></Link>
          <Link to ="/CV" style={{textDecoration: "none", color: "white"}}><h4>{menu[3]}</h4></Link>
          <Link to ="/Contact" style={{textDecoration: "none", color: "white"}}><h4>{menu[4]}</h4></Link>
        </div>
        <div className="list">
          
          {/* <button  onClick={ ()=>{changeModal(!modal)}}> click</button>
         {
          modal === true
          ? <Modal></Modal>
          : null 
        } */}
          {/* <hr/> */}
        </div>

         {/* <Modal title={title}></Modal> */}
      </Route>

      <Route exact path="/about">
      
      </Route>

      <Route exact path="/artWorks">
      <Artworks/>
      </Route>

      <Route exact path="/CV">
      
      </Route>

      <Route exact path="/Contact">
        <h3>Jinha Kang</h3>
        <h4>Based on Providence, RI and Seoul, South Korea</h4>
        <h4>jkang05@gmail.com</h4>
        <h4>jkang05@gmail.com</h4>
      </Route>

      <Route exact path="/loveAlgorithm">
       <LoveAlgorithm></LoveAlgorithm>
      </Route>

     </div>
  );
}


// function Modal(props){
//   return(
//     <div className="modal">
//     <h2>{props.title[0]}</h2>
//     <p>2021</p> 
//     <p>blah blah</p>
//   </div>
//   )
// }



function LoveAlgorithm(){
  return(
    <div className="loveAlgorithm">
    <h3>Love Algorithm 2019</h3>
    <p>This is.....blah</p>
    </div>
  )
}


export default App;