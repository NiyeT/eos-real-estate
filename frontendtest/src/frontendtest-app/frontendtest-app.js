import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@polymer/paper-button/paper-button.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';

/**
 * @customElement
 * @polymer
 */
class FrontendtestApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          height:100%;
          width:100%;
        }
        .frame{
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
        }
        .side-menu-left{
          height:100%;
          width:20%;
          background:;
        }
        .main-display{
          float:right;
          height:100%;
          width:80%;
          background:green;
          overflow-y:scroll;
          overflow-x:hidden;
        }
        .account-overview{
          height:60vh;
          width:100%;
          background:white;
        }
        .account-overview-wrapper{
          height:50vh;
          width:100%;

        }
        .projects{
          height:60%;
          width:100%:
          background:;
        }
        .account-overview-center-box{
          height:50vh;
          width:50vh;
          background:;
        }
        .account-overview-circle{
          height:100%;
          width:100%;
          border-width:10px;
          border-style:solid;
          border-color:black;
          border-radius:100em;
        }
        .projects-labels{
          height:10%;
          width:100%;

        }
        .project-card{
          height:20%;
          width:100%;
          background:blue;
        }
        .project-cat{
          height:100%;
          width:25%;
          background:grey;
          color:black;
          float:right;
        }
        .menu-wrapper{
          height:20%;
          width:100%;
          background:;
        }
        a{
          text-decoration:none;
          color:white;
        }
        .menu-button{
          height:10%;
          width:80%;
          background:white;
          border-radius:1em;
        }
        .menu-button:hover{
          cursor:pointer;
        }
        .menu-image-container{
          height:20px;
          width:20px;
        }
        .menu-button-container{
          height:10%;
          width:100%;
        }
      </style>
      <div class="main-display">
        <div class="account-overview frame">
          <div class="account-overview-wrapper frame">
            <div class="account-overview-center-box">
              <div class="account-overview-circle"></div>
            </div>
          </div>
        </div>
        <div class="projects">
          <div class="projects-labels">
          <div class="project-cat project-24_hour_supply frame">
            <span>24 Hour Supply</span>
          </div>
          <div class="project-cat project-Available_Supply frame">
            <span>Available Supply</span>
          </div>
          <div class="project-cat project-Market_Cap frame">
              <span>Market Cap</span>
          </div>
          <div class="project-cat project-name frame">
          <span>Projects</span>
          </div>
          </div>
        </div>
      </div>
      <div class="side-menu-left">
        <div class="frame logo-wrapper menu-wrapper">
          <a href="http://localhost:3000">
            <img style="height:33%;width:33%;" src="https://image.flaticon.com/icons/svg/59/59993.svg">
          </a>
        </div>
        <div class="frame projects menu-wrapper menu-button-container">
          <div class="menu-button frame investments-button" id="investments">
            <paper-button class="pink"><paper-icon-button icon="favorite"></paper-icon-button>Assets</paper-button>
          </div>
        </div>
        <div class="frame projects menu-wrapper menu-button-container">
          <div class="menu-button frame investments-button" id="">
            <paper-button class="pink"><paper-icon-button icon="favorite"></paper-icon-button>link</paper-button>
          </div>
        </div>
      </div>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'frontendtest-app'
      }
    }
  }
  ready(){
    super.ready()
    this.router={
      "investments":this.loadInvestments
    }
    this.loadActions()
    this.loadProjects()
  }
  loadProjects(){
    const projectsElement=this.root.querySelector('.projects')
    const projects=window.RealEstateProjects
    projects.forEach(function(project,i){
      projectsElement.innerHTML+=`
      <div class="project-card">
        <div class="project-cat project-24_hour_supply frame">
          ${RealEstateProjects[i]["24_hour_supply"]}
        </div>
        <div class="project-cat project-Available_Supply frame">
          ${RealEstateProjects[i].Available_Supply}
        </div>
        <div class="project-cat project-Market_Cap frame">
          ${RealEstateProjects[i].Market_Cap}
        </div>
        <div class="project-cat project-name frame">
          ${RealEstateProjects[i].project}
        </div>
      </div>
      `
    })
  }
  loadActions(){
    const menu_buttons=this.root.querySelectorAll('.menu-button')
    console.log('menu_buttons:',menu_buttons)
    const _this=this;
    menu_buttons.forEach(function(button){
      button.addEventListener('click',function(){
        const id=this.id
        _this.router[id](_this)
      })
    })
  }
  loadInvestments(subdom){
    alert('loading')
    console.log('this:',subdom)
    const q=subdom.querySelector('.main-display')
    console.log('q:',q)
    // const display=this.root.querySelector('.main-display')
    // console.log('display:',display)
    // const mainWindow=subdom.querySelector('.')
    //
    // display.innerHTML=""

  }
}

window.customElements.define('frontendtest-app', FrontendtestApp);
