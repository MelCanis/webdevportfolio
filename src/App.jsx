import './App.sass'
import hw from "./assets/hw-1.png"
import hw1 from "./assets/hw-2.png"
import hw2 from "./assets/hw-3.png"
import hw3 from "./assets/hw-4.png"
import c from './assets/c-0.png'
import c1 from './assets/c-1.png'
import c2 from './assets/c-2.png'
import pg from "./assets/pg-0.png"
import pg1 from "./assets/pg-1.png"
import pg2 from "./assets/pg-2.png"
import pg3 from "./assets/pg-3.png"
import pg4 from "./assets/pg-4.png"
import tt from "./assets/tt-00.png"
import tt1 from "./assets/tt.png"
import o from "./assets/o-0.png"
import o1 from "./assets/o-1.png"
import o2 from "./assets/o-2.png"
import o3 from "./assets/o-3.png"
import itf from './assets/if-000.png'
import itf1 from './assets/if-1.png'
import itf2 from './assets/if-2.png'
import itf9 from './assets/if-9.png'
import itf11 from './assets/if-11.png'
import { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import anime from 'animejs'



class Project {
    constructor (title, use, description, images) {
      this.title = title
      this.use = use
      this.description = description
      this.images = images
    }
}

const projects = [
  new Project('Heart Words', 'client',
  "Developed a sight words children's app used at Charles R. Drew Charter School.",
  [hw, hw1, hw2, hw3]),
  new Project('Connecting Back To Earth Elements', 'client',
  "Designed and developed the online shop for a jewelry shop in Atlanta, Georgia",
  [c, c1, c2]),
  new Project('Pigeon', 'personal',
  'A Social Media App with posts that disappear after 24 hours, & chats that ' +
  'dissappear after 24 of inactivity. I use it to interact with my friends from overseas. ' +
  'The UI is in Japanese.',
  [pg, pg1, pg2, pg3, pg4]),
  new Project('Opal', 'personal',
  'Created a notes app combining features from Notion, Obsidian, and Google Keep for ultimate thought organization.',
  [o, o1, o2, o3]),
  new Project('Typing Trainer', 'personal',
  'Uses a metronome to pace your typing & achieve a higher score. Tracks words typed slowly & incorrectly & gives them to you in practice mode.',
  [tt, tt1]),
  new Project("It'll Fly", "other", "Children's Book illustrated by me",
  [itf, itf1, itf2, itf9, itf11]
  )
]

const split = str => (str.split('').map((i, key) => i == " " ? <span key={key}>&nbsp;</span> : <span key={key}>{i}</span>))

const Yuh = ({title, description, images, onClick, hover}) => (
  <div className="Project"
  onClick={onClick}
  onMouseEnter={_ => hover(images[0])}
  onMouseLeave={_ => hover(false)}
  >
    <h6 className="name">{title}</h6>
    <p className="yap">{description}</p>
    <img src={images[0]} alt="" className="theproof" />
    <div className='span'>View More</div>
  </div>
)


function App() {
  const [theyclicked, set] = useState(false)
  const [hover, seth] = useState(false)


  useEffect(_ => {
    anime({
      targets: '.theygonhireme > *',
      delay: function(el, i, l) {
        return i * 100;
      },
      duration: 2000,
      opacity: [0, 1]
    })
  }, [])


  return (
    <>
    <div className="theygonhireme">
      {/* <p>
        I make <strong>web apps</strong> & I'm very <i>smart</i>. Hire me please...&nbsp;&nbsp;&nbsp;:-P
      </p> */}
      {split("I make ")}
      {<strong>{split("web apps")}</strong>}
      { split(" & I'm very ")}
      {<i>{split("smart")}</i>}
      {split(". Hire me please...   :-P")}
    </div>
    <div className="myprojects">
      {hover && <img src={hover} alt="" className="background" />}
      <h4>My Projects</h4>
      {!theyclicked ? <div className="cont">
        <section>
          <h5>For Clients</h5>
          <div className="projects">
            {projects.filter(({use}) => use == 'client').map((i, key) => <Yuh key={key} {...i} onClick={_ => set(i)} hover={seth}/>)}
          </div>
        </section>
        <section>
          <h5>Personal</h5>
          <div className="projects">
            {projects.filter(({use}) => use == 'personal').map((i, key) => <Yuh key={key} {...i} onClick={_ => set(i)} hover={seth}/>)}
          </div>
        </section>
        <section>
          <h5>Other Work</h5>
          <div className="projects">
            {projects.filter(({use}) => use == 'other').map((i, key) => <Yuh key={key} {...i} onClick={_ => set(i)} hover={seth}/>)}
          </div>
        </section>
      </div> : <div className='theproject'>
        <h3 onClick={_ => set(false)}>
          <button><FaArrowLeft /></button>
          {theyclicked.title}
        </h3>
        <div className="images">
          {theyclicked.images.filter((i, n) => n!=0).map((src, key) => <img key={key} src={src}/>)}
        </div>
        <p className="description">{theyclicked.description}</p>
        </div>}
    </div>
    <div className="butt">
      {/* <div className="stuffIdo">
      <strong>Programming:</strong> React, Typescript, JavaScript, jQuery, Python, HTML5, CSS3, Sass, GitHub, Azure, Firebase, Node <br/>
      <strong>Other Skills:</strong> Japanese (CEFR C1), Visual Art, Guitar <br/>
      </div> */}
      <div className="contact">
        <p>+14048399892</p>
        <p>canismelvin@gmail.com</p>
      </div>
    </div>
    </>
  )
}

export default App
