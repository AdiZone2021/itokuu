import React, { useState } from 'react';
import LoginForm from './components/LoginForm.js';
import ReactPlayer from 'react-player'
import styled from 'styled-components'

function App() {
  const adminUser = {
    email: "Okuuit@gmail.com",
    password: "nomad2022"
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
        console.log("Logged in");
        setUser({
          name:details.name,
          email:details.email,
        });
  } else{
        console.log("Details do not match!");
        setError("Маалыматтар дал келген жок!");
    }
  }
  
  
  const Logout = () => {
    setUser({name:"", email:"" });
  }         
 
  
  return (
    <div className="App">
      <HeaderLogo>
      <ul>
     <li><img src="https://itokuu.com/img/TWO%20FLAGS%20EMBASSY%20LOGO_BLUE_LETTERS.png"/></li> 
     <li><img src="https://itokuu.com/img/AC%20Logo_Color.png"/></li> 
     <li><img src="https://itokuu.com/img/OKUUIT.png"/></li> 
      </ul>
      </HeaderLogo>

      <div className="log">
      {(user.email !="")?(
        <div className="welcome"> 
           <h2> Кош келдиңиз, <span>{user.name}</span></h2> 
          <button className="btn" onClick={Logout}>Чыгуу</button>        
          <br/>
          <div className="player"> 
          <h3>#1-сабак. HTML деген эмне? Киришүү сабак</h3>
          <br/>
          <ReactPlayer controls url='https://youtu.be/9Udl8WvTba4' 
           fluid={false}
        width={500}
        height={400} />
          </div>
          <br/>
          <br/>
          <br/>
          <div className="player"> 
          <h4>#2-HTML сабактар. HTML тегтер. Div HEADER Footer NAV блок теги жөнүндө сөз болот.</h4>
          <br/>
          <ReactPlayer controls url='https://youtu.be/dSMWopvbBnA' 
          fluid={false}
          width={500}
          height={400} />
          </div>
          <br/>
          <br/>
          <br/>
          <div className="player"> 
          <h5>#3 HTML сабактар. Бул сабакта, ошондой эле мазмуну беттеги,
          <br/> Текст Сүрөттөр менен башкача айтканда мазмуну менен иштөө үчүн тегтер менен таанышабыз.
          <br/> H1-H6 теги , a, SPAN, P, IMG, ul\OL\LI жана BR.</h5>
          <br/>
          <ReactPlayer controls url='https://youtu.be/PA9QIhDagZc' 
          fluid={false}
          width={500}
          height={400} />
          </div>
          <br/>
          <br/>
          <br/>
          <div className="player"> 
          <h5>#4  Бөлүм №4.  FORM, INPUT, TEXTAREA, SELECT, OPTION и BUTTON,
          <br/> ошондой эле алардын атрибуттарын изилдөө.
          <br/> Сабактын аягында практикалык тапшырма болот:)</h5>
          <br/>
          <ReactPlayer controls url='https://youtu.be/MGKs8JHk8uA' 
          fluid={false}
          width={500}
          height={400} />
          </div>
          <br/>
          <br/>
          <br/>
          <div className="player"> 
          <h5>#5 CSS синтаксиси. CSS стилдер 
          каскаддык жадыбалдар менен тааныша аласыз. <br/>CSS синтаксти  изилдөө
          </h5>
          <br/>
          <ReactPlayer controls url='https://youtu.be/sq-rtWIstoY' 
          fluid={false}
          width={500}
          height={400} />
          </div>
        </div>
      ):(
      <LoginForm Login={Login} error={error} />
      )}
    </div>
    </div>
  );}




export default App;


const HeaderLogo = styled.div`
height:100px; 
`