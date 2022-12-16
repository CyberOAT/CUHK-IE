/**
* ECLT5830 Network and Web Programming
*
* I declare that the assignment here submitted is original
* except for source material explicitly acknowledged,
* and that the same or closely related material has not been
* previously submitted for another course.
* I also acknowledge that I am aware of University policy and
* regulations on honesty in academic work, and of the
disciplinary
* guidelines and procedures applicable to breaches of such
* policy and regulations, as contained in the website.
*
* University Guideline on Academic Honesty:
* http://www.cuhk.edu.hk/policy/academichonesty/
*
* Student Name : GUO Hao
* Student ID : 1155178040
* Date : 2022/12/15
*/
import React, { Component } from 'react';
import style from './App.css';
import { Link } from "react-router-dom";
import {
  Routes,
  Route
} from "react-router-dom";
import logo from './logo.png';

const dataList = [
  {
    "id": "run",
    "featureImageUrl": "run.jpg",
    "title": "Every day 1k, Doctor run away",
    "description": "Running is good for health.",
    "content": "According to Wikipedia, Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet are above the ground (though there are exceptions). This is in contrast to walking, where one foot is always in contact with the ground, the legs are kept mostly straight and the center of gravity vaults over the stance leg or legs in an inverted pendulum fashion. A feature of a running body from the viewpoint of spring-mass mechanics is that changes in kinetic and potential energy within a stride occur simultaneously, with energy storage accomplished by springy tendons and passive muscle elasticity. The term running can refer to any of a variety of speeds ranging from jogging to sprinting."
  },
  {
    "id": "sunset",
    "featureImageUrl": "sunset.jpg",
    "title": "Praise the Sun",
    "description": "The Sun is a wondrous body. Like a magnificent father!",
    "content": "The Sun's core fuses about 600 million tons of hydrogen into helium every second, converting 4 million tons of matter into energy every second as a result. This energy, which can take between 10,000 and 170,000 years to escape the core, is the source of the Sun's light and heat. When hydrogen fusion in its core has diminished to the point at which the Sun is no longer in hydrostatic equilibrium, its core will undergo a marked increase in density and temperature while its outer layers expand, eventually transforming the Sun into a red giant. It is calculated that the Sun will become sufficiently large to engulf the current orbits of Mercury and Venus, and render Earth uninhabitable – but not for about five billion years. After this, it will shed its outer layers and become a dense type of cooling star known as a white dwarf, and no longer produce energy by fusion, but still glow and give off heat from its previous fusion."
  },
  {
    "id": "painting",
    "featureImageUrl": "painting.jpg",
    "title": "Do you like drawing?",
    "description": "Painting is an important form in the visual arts",
    "content": "Painting is the practice of applying paint, pigment, color or other medium to a solid surface. The medium is commonly applied to the base with a brush, but other implements, such as knives, sponges, and airbrushes, can be used. In art, the term painting describes both the act and the result of the action. The support for paintings includes such surfaces as walls, paper, canvas, wood, glass, lacquer, pottery, leaf, copper and concrete, and the painting may incorporate multiple other materials, including sand, clay, paper, plaster, gold leaf, and even whole objects."
  },
  {
    "id": "concert",
    "featureImageUrl": "concert.jpg",
    "title": "Memorable Day!",
    "description": "This is the first time I went to a concert",
    "contents": "According to Wikipedia, A concert is a live music performance in front of an audience. The performance may be by a single musician, sometimes then called a recital, or by a musical ensemble, such as an orchestra, choir, or band. Concerts are held in a wide variety and size of settings, from private houses and small nightclubs, dedicated concert halls, amphitheatres and parks, to large multipurpose buildings, such as arenas and stadiums. Indoor concerts held in the largest venues are sometimes called arena concerts or amphitheatre concerts. Informal names for a concert include show and gig. Regardless of the venue, musicians usually perform on a stage (if not actual then an area of the floor designated as such). Concerts often require live event support with professional audio equipment. Before recorded music, concerts provided the main opportunity to hear musicians play. For large concerts or concert tours, the challenging logistics of arranging the musicians, venue, equipment and audience (ticket sales) are handled by professional tour promoters."
  },
  {
    "id": "bicycles",
    "featureImageUrl": "bicycles.jpg",
    "title": "Olympic GO GO!",
    "description": "Bicycle seems fun",
    "content": "According to Wikipedia, The cycling competitions of the 2020 Summer Olympics in Tokyo featured 22 events in five disciplines. The 2020 Olympics were postponed to 2021 due to the COVID-19 pandemic. Cycling competitions had been contested in every Summer Olympics programme since the first modern Olympiad in 1896 alongside athletics, artistic gymnastics, fencing and swimming. Since the 1896 contests which featured five track events and an 87 km road race from Athens to Marathon and back, Olympic cycling had gradually evolved to include women's competitions, mountain bike and BMX to arrive at the current 22 events. The cycling program for this edition was expanded with 4 more events than those held in 2016. BMX freestyle was added in the program for the first time and there will also be a return of Madison events on the track that had been removed from the Olympic program in 2008."
  }
];

function App() {
  return (
    <div className="App">
      <div id="header-background">
        <h1>
          <span>
            <img src={logo} className="logo" />
          </span>
          Welcome to 1155178040 Blog
        </h1>
        <div>
          <Link to="/index">
            <button type="button" className="btn">Home</button>
          </Link>
          <br />
          <Link to="/message-board">
            <button type="button" className="btn">Message Board</button>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <div className="Main">
        <Routes>
          <Route path="/posts/run" exact element={<PostDetail posts={dataList[0]} />} />
          <Route path="/posts/sunset" exact element={<PostDetail posts={dataList[1]} />} />
          <Route path="/posts/painting" exact element={<PostDetail posts={dataList[2]} />} />
          <Route path="/posts/concert" exact element={<PostDetail posts={dataList[3]} />} />
          <Route path="/posts/bicycles" exact element={<PostDetail posts={dataList[4]} />} />
          <Route path="/message-board" exact element={<MessageBoard />} />
          <Route path="/index" exact element={<Index />} />
          <Route path="/" exact element={<Index />} />
        </Routes>
      </div>
    </div>
  );
}

function getDate() {
  var date = new Date();
  date.setHours(date.getHours(), date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString()
}

class PostDetail extends Component {
  render() {
    return (
      <div>
        <br />
        <div className="post-button">
          <Link to="/index">
            <button className="btn_back">Back</button>
          </Link>
        </div>
        <div>
          <h1>{this.props.posts.title}</h1>
          <p>{this.props.posts.content}</p>
        </div>
      </div>
    )
  }
}

class Postthumbnail extends Component {
  render() {
    return (
      <div className="post">
        <Link to={"/posts/" + this.props.posts.id}>
          <img className="imgPostthumbnail" src={this.props.posts.featureImageUrl} alt={this.props.posts.id}></img>
          <div>
            <h4 className="title">{this.props.posts.title}</h4>
            <p className="description">{this.props.posts.description}</p>
          </div>
        </Link>
      </div>
    );
  }
}


function Index() {
  return (
    <div>
      <Postthumbnail posts={dataList[0]} />
      <br />
      <Postthumbnail posts={dataList[1]} />
      <br />
      <Postthumbnail posts={dataList[2]} />
      <br />
      <Postthumbnail posts={dataList[3]} />
      <br />
      <Postthumbnail posts={dataList[4]} />
    </div>
  );
}


// class MessageBoard extends React.Component{
class MessageBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      newEmail: '',
      newMessage: '',
      newTime: '',
      isdisplay: false
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      Email: this.state.Email,
      Message: this.state.Message
    }
    fetch("/.netlify/functions/getmsg", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then((res) => {
        return res.text();
      })
      .then((json) => {
        this.setState({ users: JSON.parse(json).value })
        this.setState({ newEmail: this.state.Email });
        this.setState({ newMessage: this.state.Message });
        this.setState({ newTime: getDate() });
        this.setState({ isdisplay: true });
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div className="message-board">
        <div>
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="email">
              <label>
                Email address:
                <br />
                <input type="text" name="Email" className="form-control" placeholder="name@example.com" size="50" onChange={this.onChange.bind(this)} defaultValue={this.state.Email} />
              </label>
            </div>
            <div className="message">
              <label>
                Message:
                <br />
                <input type="text" name="Message" className="form-control" placeholder="your message" size="50" onChange={this.onChange.bind(this)} defaultValue={this.state.Message} />
              </label>
            </div>
            <br />
            <div className="form_button">
              <button className="btn_submit">Submit</button>
            </div>
          </form>

          <div className="the_list">
            {
              this.state.users.map((item) => (
                <div>
                  <br />
                  <div className='msgItem'>
                    <h4>User: {item.Email}</h4>
                    <p>Message: {item.Message}</p>
                    <p><i>Time: {item.created}</i></p>
                  </div>
                </div>
              ))
            }
            <div style={{display: this.state.isdisplay? 'block':'none'}}>
              <br/>
              <div className='msgItem'>
                <h4>User: {this.state.newEmail}</h4>
                <p>Message: {this.state.newMessage}</p>
                <p><i>Time: {this.state.newTime}</i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;