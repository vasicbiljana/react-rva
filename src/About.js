import React, {Component} from 'react';

class About extends Component{
    render() {
        return (
          <div className="about"> 
           <h2>O nama</h2>
              <p> U Visoj tehnickoj skoli strukovnih studija u Novom sadu postoji nekoliko smerova osnovnih studija :</p>
            <div className="cards"> 
            {cards.map((card, index) => (  
                  <div className="card"  key={index}>
                      <img src={card.img} className="card-img-top" alt={card.title} />
                          <div className="card-body">
                              <h5 className="card-title">{card.title}</h5>
                           </div>
                  </div> 
              ))}
            </div>
          </div>
      );
      }
}
export default About;

const cards = [  
    {  
      'id' : 1,
      'title': 'Mašinsko inženjerstvo',   
      'img': 'https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/279356716_3163436140566576_1469399013675976570_n.jpg?stp=dst-jpg_s600x600&_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHmY89jl-HcyseMe5uN7aRm15b4DdNKHDbXlvgN00ocNgh8tTfYr1psLmwqXNTA5muGe91o8DB7dbyU-h0sn_lf&_nc_ohc=o9B2qM0p38YAX9HAsN3&_nc_ht=scontent.fbeg4-1.fna&oh=00_AT-AkXh0rjQFpsamU41o-7fUdWIF-21GCDClZX5Dkm7ZVw&oe=627546FA'  
    },  
    {  
        'id' : 2,
      'title': 'Drumski saobraćaj',   
      'img': 'https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/279146236_3161760327400824_1988129958078789338_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEsXSdJ4Nq0LlaVAG34B25SIUz9tKlCt6MhTP20qUK3oy2sWeCxmkDOf7Okdl5CLfRsc0grGE0NMDs8rXmTiGAC&_nc_ohc=URxieYBRzzQAX9eATqc&_nc_oc=AQlrTPUcawJFNIqQ6rRBbqZrFh2AQQRqyqOdOPoyJHLHK6Q_Y5Eu5r1V_6paXQiOpnE&_nc_ht=scontent.fbeg4-1.fna&oh=00_AT9h2GDzW-PY0a_rwAwKGhK9Dv4jN8esaCqCnnyBUD8qFQ&oe=6275DDDF'  
    },  
    {   
        'id' : 3,
      'title': 'Veb dizajn',   
      'img': 'https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/278687498_3156704644573059_1358236751107688926_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEEHAyRnPm6ChzUNNba4CuVzzxhJEDunazPPGEkQO6drI7LHlTM474PdAIe3gO5w-Iy0S88VvRrXP57Z8aRcNiS&_nc_ohc=Hin88MhoQ1AAX-6Audr&_nc_ht=scontent.fbeg4-1.fna&oh=00_AT_6N8mobCxw2X17ubgJ38fQScgtst18gqKz0id3mJaerw&oe=627407E6'  
    },  
    {  
        'id' : 4,
        'title': 'Elektrotehnika',   
        'img': 'https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/278294800_3153227921587398_2652494062228804736_n.jpg?stp=dst-jpg_s600x600&_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHSAJDF8psPLQtdE-9ACohEZkJXeyucRVNmQld7K5xFU7eyYCi5KWqxC1qSdWLJxo4bMt4ccY9jPljiOtQ8cl9r&_nc_ohc=ks4n0AgFCsoAX8I35Su&_nc_ht=scontent.fbeg4-1.fna&oh=00_AT9y6ppDbi7FArRntpdEcHHVlcP0vW12wNMkvV563A5xVg&oe=6274BF84'  
      },  
      {  
          'id' : 5,
        'title': 'Informacione tehnologije',   
        'img': 'https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/278268514_3152384781671712_7232638939510487580_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG5XoqOMkI79jRp1FQ2qLsAO4zf6m0dJfQ7jN_qbR0l9BnNVyJ7b3wFWtVd6zjxop_L8hqV1TAlo6y1Rwvgpm7M&_nc_ohc=5YNfvFMM97UAX94e7B7&tn=7eMcDpE6GisIyoby&_nc_ht=scontent.fbeg4-1.fna&oh=00_AT8PzxOmxo386uShz3rU3-wTdoNTFFHaeyM4HP3fSBXU8Q&oe=627406FF'  
      },  
      {   
          'id' : 6,
        'title': 'Zaštita na radu',   
        'img': "https://external.fbeg4-1.fna.fbcdn.net/safe_image.php?w=500&h=261&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZn4Z5CA6SDU%2Fmaxresdefault.jpg&cfs=1&ext=jpg&_nc_eui2=AeFDWs-DXt5SWexg926bsxgiUK5v_RP4FsNQrm_9E_gWw4wptCUqSGjOf9e1NLz3IYDlhaQMHcQkWIuv1nNSjhtz&_nc_oe=7006a&_nc_sid=06c271&_nc_o2e=1&ccb=3-6&_nc_hash=AQH2KRbdeUlV684q"  
      },  
]; 




