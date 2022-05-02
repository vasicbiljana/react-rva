import React, {Component} from 'react';
import img from './img1.png';

class Home extends Component{
    render(){
        return(
            <>   
            <Header/>
            <News/>
            <PorukaDana/>
            </>
        );
    }
}
export default Home;

function Header() {
    return <img src={img} alt="Logo" className='sliderImg' />;
  }

  const students = [  
    {  
      'id' : 1,
      'title': 'UPIS',   
      'desc': '2022/2023'  
    },  
    {  
        'id' : 2,
      'title': 'Kratki program studija',   
      'desc': 'Informacione tehnologije'  
    },  
    {   
        'id' : 3,
      'title': 'Priprema za polaganje',   
      'desc': 'strucnog ispita'  
    },  
]; 
  class News extends React.Component{
      
    render(){
        return (  
            <div className="container">  
                <div className="blocks">  
                    {students.map((student, index) => (  
                        <div className="block" key={index} > 
                            <h2>{student.title}</h2>  
                            <h3>{student.desc}</h3>  
                         </div>  
                        ))
                    }  

            </div>  
        </div>  
    );  
}  
}

class PorukaDana extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Izvodjenje nastave na osnovnim strukovnim studijama",
            desc:"Оd 1.05.2022. godine, nastava za master strukovne studije će se odvijati uživo u prostorijama Škole. Raspored za nastavnu nedelju je izmenjen i njega možete pogledati na linku i on važi od",
            datumOd:"03.05.2022", datumDo:"06.05.2022.",
      
        };
    }
    update = () => {
        this.setState({title:"Izvodjenje nastave na master strukovnim studijama",
        desc:"Оd 03.05.2022. godine, nastava za master strukovne studije će se odvijati uživo u prostorijama Škole. Raspored za nastavnu nedelju je izmenjen i njega možete pogledati na linku i on važi od",
        datumOd:"03.05.2022 do",datumDo:"16.05.2022."});
        }

            background = (x) => {
            var content=document.getElementById("contentNews");
            content.style.background=x;
          } 
          hover = (x,y,z) => {
            let btn =document.getElementById("btn");
            btn.style.background=x;
            btn.style.border = y;
            btn.style.color = z;
          } 
        

    render() {
        return ( 
            <div className='containerNews'>
                <div className='contentNews' >
                     <h1>  {this.state.title}  </h1>
                     <p>  {this.state.desc} {this.state.datumOd} {this.state.datumDo}</p>
                    <button type="button" id="btn" onClick={this.update} onMouseOver={()=> this.hover("white","2px solid #1f4c76", "#1f4c76")} onMouseOut={()=> this.hover("#1f4c76","2px solid #1f4c76", "white")}>Detaljnije</button> 
                </div>
                <div className='contentNews' id='contentNews' onMouseOver={()=> this.background("#1f4c76")}
      onMouseOut={() => this.background("#9f9f9f32")} >  <h1> Materijali za prjemni ispit i pripremnu nastavu 2022 </h1>
 <p> Други циклус припремне наставе у просторијама Школе почиње 07.05.2022. године. Način polaganja i bodovanja prijemnog ispita, kao i materijal za pripremu istog, sa tačnim odgovorima iz oblasti koje se polažu, kao i video materijali u plej listi na našem Youtube kanalu dati su na sledećim linkovima </p>
                    
                </div>
            </div> );
        }
    }
