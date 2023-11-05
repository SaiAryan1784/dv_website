// import './team.css'
// import React, { Component } from 'react';
// import TeamCard from './TeamCard';

// class Team extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       boxClass:"box",
//       translateBox:0,

//     }
//   }

//   // viewTeam=()=>{
//   //   if(this.state.translateBox>-2400){

//   //     this.setState({
//   //       translateBox:this.state.translateBox-580,
//   //     })


//   //   }else{
//   //     this.setState({
//   //       translateBox:0
//   //     })
//   //   }
  
//   render(){
//   return (
//     <section className="teamhome" id="team">
//       <div className="home2">
//         <div
//           className="team-container"
//         >
//           <h1>MEET THE "<span className='h1-span'>TEAM</span>"</h1>
//           <div className="" id="teamContainer">
//             <div className="card-container">
//             <TeamCard state={this.state}  imageName={require('./IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
//             memberYear={`2nd`} 
//             memberPost={`Technical Coordinator`} />
//             <TeamCard state={this.state}  imageName={require('./IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
//             memberYear={`2nd`} 
//             memberPost={`Technical Coordinator`} />
//             <TeamCard state={this.state}  imageName={require('./IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
//             memberYear={`2nd`} 
//             memberPost={`Technical Coordinator`} />
//             <TeamCard state={this.state}  imageName={require('./IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
//             memberYear={`2nd`} 
//             memberPost={`Technical Coordinator`} />
//             <TeamCard state={this.state}  imageName={require('./IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
//             memberYear={`2nd`} 
//             memberPost={`Technical Coordinator`} />

//             </div>
//             <div className="card-container">
//             <TeamCard state={this.state}  imageName={require('./IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
//             memberYear={`2nd`} 
//             memberPost={`Technical Coordinator`} />
//             <TeamCard state={this.state}  imageName={require('./IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
//             memberYear={`2nd`} 
//             memberPost={`Technical Coordinator`} />
//             <TeamCard state={this.state}  imageName={require('./IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
//             memberYear={`2nd`} 
//             memberPost={`Technical Coordinator`} />
//             <TeamCard state={this.state}  imageName={require('./IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
//             memberYear={`2nd`} 
//             memberPost={`Technical Coordinator`} />
//             <TeamCard state={this.state}  imageName={require('./IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
//             memberYear={`2nd`} 
//             memberPost={`Technical Coordinator`} />

//              </div>
//              </div>
//              </div>
//              </div>
//              </section>
    
//     );
//   }
// }

  



// export default Team;




import './team.css'
import React, { Component } from 'react';
import TeamCard from './TeamCard';

class Team extends Component {
  constructor(props){
    super(props)
    this.state={
      fullTeam:"none",
      boxClass:"box ",
      translateBox:0,

    }
  }

  viewTeam=()=>{
    if(this.state.translateBox>-1000){

      this.setState({
        translateBox:this.state.translateBox-280,
      })


    }else{
      this.setState({
        translateBox:0
      })
    }
  }
  prevTeam=()=>{

      if(this.state.translateBox!==0){

        this.setState({
          translateBox:this.state.translateBox+280,
        })
      }else{
        this.setState({
          translateBox:0
        })
      }


    
  }

  
  render(){
  return (
    <section className="teamhome" id="team">
      <div className="home2">
        <div
          className="team-container"
        >
          <h1>MEET THE "<span className='h1-span'>TEAM</span>"</h1>
          <div className="" id="teamContainer">
            <div className="card-container">
            <TeamCard state={this.state}  imageName={require('../Assets/IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
            memberYear={`2nd`} 
            memberPost={`Technical Coordinator`} />
            <TeamCard state={this.state}  imageName={require('../Assets/IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
            memberYear={`2nd`} 
            memberPost={`Technical Coordinator`} />
            <TeamCard state={this.state}  imageName={require('../Assets/IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
            memberYear={`2nd`} 
            memberPost={`Technical Coordinator`} />
            <TeamCard state={this.state}  imageName={require('../Assets/IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
            memberYear={`2nd`} 
            memberPost={`Technical Coordinator`} />
            <TeamCard state={this.state}  imageName={require('../Assets/IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
            memberYear={`2nd`} 
            memberPost={`Technical Coordinator`} />

            </div>
            <div className="card-container">
            <TeamCard state={this.state}  imageName={require('../Assets/IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
            memberYear={`2nd`} 
            memberPost={`Technical Coordinator`} />
            <TeamCard state={this.state}  imageName={require('../Assets/IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
            memberYear={`2nd`} 
            memberPost={`Technical Coordinator`} />
            <TeamCard state={this.state}  imageName={require('../Assets/IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
            memberYear={`2nd`} 
            memberPost={`Technical Coordinator`} />
            <TeamCard state={this.state}  imageName={require('../Assets/IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
            memberYear={`2nd`} 
            memberPost={`Technical Coordinator`} />
            <TeamCard state={this.state}  imageName={require('../Assets/IMG_20230201_153849-modified.png')} memberName={`Apoorva Kesarwani`} 
            memberYear={`2nd`} 
            memberPost={`Technical Coordinator`} />

             </div>
             </div>
             <div className="teamBtnContainer">

<button className="teambutton" onClick={()=>this.prevTeam()}>Prev</button>
<button className="teambutton" onClick={()=>this.viewTeam()}>Next</button>
</div>
             </div>
             </div>
             </section>
    
    );
  }
}

  



export default Team;


