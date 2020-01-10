import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/footer"
import Link from 'next/link'
import{Container,Col,Row ,Button}  from 'reactstrap'
import "./chat.css"
import Bubble from "../components/chat components/sideBubbel"
import UserInfo from "../components/chat components/userInfo"
import Msg from "../components/msg"

class Chat extends React.Component{
  constructor(props){
    super(props)
    this.state={
      bubbelArr : [
        {name:"bubbel 1"},
        {name:"bubbel 2"},
        {name:"bubbel 3"},
        {name:"bubbel 4"},
        {name:"bubbel 5"},
        {name:"bubbel 6"},
        {name:"bubbel 7"},
        {name:"bubbel 8"},
      ],
      msgArr:["hi","hello","by","suck chat","welcome","bybyby","fuck you","hi","hello","by","suck chat","welcome","bybyby"],
      myArr:["hi","hello","by","suck chat","welcome","bybyby","fuck you","hi","hello","by","suck chat","welcome","bybyby"]
      
      
      
    }
      
  }

  render(){
   
    return(
      <Container className="container justify-content-md-center " fluid={true}> 
       <Row className="row">
         {/* this one is for the first one where you have the bubbels and user name */}
          <Col className="col" sm="4" id="col">
            
            <UserInfo/>

            <Col className="search mt-2">
            <input class="form-control input-lg mt-2" id="inputlg" type="text" placeholder="search.... "/>
            <Button variant="info"className="btn ml-2 mt-2 btn-lm" >search</Button>
            </Col>

        {/* for the bubble side bar */}
            <div className='side-bar-bubble mt-5 overflow-auto '>
              {this.state.bubbelArr.map(elm=><Bubble name={elm.name}/>)}
            </div>


          </Col>
        {/* this is where the bubbel part end */}
        {/* for the bubbel on the top of the chat */}

        {/* for the msgs */}
          <Col className="col" sm="8">
            <Bubble name="test bubble"/>       
             <Col className="side-bar-bubble mt-5 overflow-auto">
              {this.state.msgArr.map(elm=><Msg msg={elm} name={elm}/>)}
              {this.state.myArr.map(elm=><div style={{display:"flex",alignItems:"flex-end",flexDirection:"column"}}><Msg msg={elm}/></div>)}
             
             </Col>
            {/* for the chat  */}
             <div className="search" id="chatBar">
               <input class="form-control input-lg mt-2" id="inputlg" type="text" placeholder="search.... "/>
               <Button variant="info"className="btn ml-2 mt-2 btn-lm" >send</Button>
            </div>
          </Col>   

          
    
      </Row>
  
      </Container>
    )
  }
}
export default Chat


// const Home = () => (
//   <div>
//     <Nav />
    
//     <div className="hero">
//       <h1 className="title">Welcome to Next.js!</h1>
//       <p className="description">
//         To get started, edit <code>pages/index.js</code> and save to reload.
//       </p>

//       <div className="row">
//         <a href="https://nextjs.org/docs" className="card">
//           <h3>Documentation &rarr;</h3>
//           <p>Learn more about Next.js in the documentation.</p>
//         </a>
//         <a href="https://nextjs.org/learn" className="card">
//           <h3>Next.js Learn &rarr;</h3>
//           <p>Learn about Next.js by following an interactive tutorial!</p>
//         </a>
//         <a
//           href="https://github.com/zeit/next.js/tree/master/examples"
//           className="card"
//         >
//           <h3>Examples &rarr;</h3>
//           <p>Find other example boilerplates on the Next.js GitHub.</p>
//         </a>
//       </div>
//     </div>
//     <Footer/>
//     <style jsx>{`
//       .hero {
//         width: 100%;
//         color: #333;
//       }
//       .title {
//         margin: 0;
//         width: 100%;
//         padding-top: 80px;
//         line-height: 1.15;
//         font-size: 48px;
//       }
//       .title,
//       .description {
//         text-align: center;
//       }
//       .row {
//         max-width: 880px;
//         margin: 80px auto 40px;
//         display: flex;
//         flex-direction: row;
//         justify-content: space-around;
//       }
//       .card {
//         padding: 18px 18px 24px;
//         width: 220px;
//         text-align: left;
//         text-decoration: none;
//         color: #434343;
//         border: 1px solid #9b9b9b;
//       }
//       .card:hover {
//         border-color: #067df7;
//       }
//       .card h3 {
//         margin: 0;
//         color: #067df7;
//         font-size: 18px;
//       }
//       .card p {
//         margin: 0;
//         padding: 12px 0 0;
//         font-size: 13px;
//         color: #333;
//       }
//     `}</style>
//   </div>
// )

// export default Home
