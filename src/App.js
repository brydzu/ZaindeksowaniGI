import React, { Component } from "react";
import ReactDOM from "react-dom";
import Naglowek from "./Components/Naglowek";

import "./styles.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Components/Main";
import { BrowserRouter, Route, Link } from "react-router-dom";

import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";

import karuzela1 from "./Assets/karuzela1.jpg";
import karuzela2 from "./Assets/karuzela2.jpg";
import karuzela3 from "./Assets/karuzela3.jpg";
import karuzela4 from "./Assets/karuzela4.jpg";

import "./SideDrawer.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="demo-big-content">
          <Layout>
            <Naglowek />
            <Header title="Wieś Biernatki - Zapraszamy!" scroll  style={{ backgroundColor: "darkgray" }}>
              <Navigation>
                <Link to="/Home">Strona główna</Link>
                <Link to="/Aktualnosci">Aktualnosci</Link>
                <Link to="/About">Informacje</Link>
                <Link to="/Fundusz">Fundusz</Link>
                <Link to="/Soltys">Soltys</Link>
                <Link to="/Mieszkancy">Mieszkancy</Link>
              </Navigation>
            </Header>
            <Drawer title="Title" className="side-drawer">
              <Navigation>
                <Link className="side-drawer.open" to="/Home">
                  Strona główna
                </Link>
                <Link className="side-drawer.open" to="/Aktualnosci">
                  Aktualnosci
                </Link>
                <Link className="side-drawer.open" to="/About">
                  Informacje
                </Link>
                <Link className="side-drawer.open" to="/Fundusz">
                  Fundusz
                </Link>
                <Link className="side-drawer.open" to="/Soltys">
                  Soltys
                </Link>
                <Link className="side-drawer.open" to="/Mieszkancy">
                  Mieszkancy
                </Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <MDBContainer>
                <MDBCarousel
                  activeItem={1}
                  length={4}
                  showControls={true}
                  showIndicators={true}
                  className="z-depth-1"
                >
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={karuzela1}
                          alt="First slide"
                        />
                        <MDBMask overlay="black-light" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive" />
                        <p />
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={karuzela2}
                          alt="Second slide"
                        />
                        <MDBMask overlay="black-strong" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive" />
                        <p />
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={karuzela3}
                          alt="Third slide"
                        />
                        <MDBMask overlay="black-slight" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive" />
                        <p />
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={karuzela4}
                          alt="Fourth slide"
                        />
                        <MDBMask overlay="black-sstrong" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive" />
                        <p />
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
              </MDBContainer>
              <Main />
            </Content>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);
export default App;
