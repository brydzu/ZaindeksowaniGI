import React, { Component } from "react";
//import soltys_foto from "../Assets/soltys-biernatki-2019.jpg";
//import Soltys from "./Soltys";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { Container, Row, Col } from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  render() {
    return (
      <div
        style={{
          //  borderRadius: "20px",
          //  borderStyle: "solid",
          //  color: "black",
          marginLeft: "80px",
          marginRight: "80px",
          marginTop: "2px",

          // backgroundAttachment: { soltys_foto },
          opacity: "1",
          textAlign: "center"
        }}
      >
        <Container>
          <Row>
            <Col>
              <h1
                style={{ color: "yellow", opacity: "1", textAlign: "center" }}
              >
                Witamy w serwisie Zaindeksowani!
              </h1>
              {/*<h2>To tez jest strona glowna</h2>
              <h2>Wsi Biernatki</h2>*/}
              <h3 style={{ color: "blue", opacity: "1", textAlign: "center" }}>
                Serdecznie witamy na stronie dotyczącej indeksu glikemicznego i
                obciążenia glikemicznego, jakie mają poszczególne produkty oraz
                potrawy z nich skomponowane.
              </h3>
              <h3 style={{ color: "blue", opacity: "1", textAlign: "center" }}>
                Można również tutaj znależć wiele ciekawych przepisów na potrawy
                o niskim indeksie i ładunku glikemicznym. Jest też sposób w jaki
                oblicza sięi obciążenia glikemicznego, jakie mają poszczególne
                produkty oraz potrawy z nich skomponowane.
                {/*}   </Col>
          </Row>
          <Row>
            <Col>
              <img
                style={{
                  alignSelf: "center",
                  opacity: "1",
                  textAlign: "center"
                }}
                src={soltys_foto}
                alt="Nowy soltys wsi Biernatki wraz z radą sołecką"
              />
            </Col>
            {/*} </Row>
          <Row> 
            <Col>
              <div>*/}
                <p>
                  {/*}                <img
                    style={{
                      //alignSelf: "center",
                      opacity: "1",
                      //alignContent: center

                      //textAlign: "center"
                      //justifyContent: 'center',
                      alignItems: "center",
                      width: 600,
                      height: 350,
                      marginRight: 30,
                      marginTop: 20
                    }}
                    src={soltys_foto}
                    //alt="Nowy soltys wsi Biernatki wraz z radą sołecką"
                  /> */}
                </p>
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              Biernatki – wieś położona w województwie dolnośląskim, w powiecie
              jaworskim, w gminie Wądroże Wielkie. Miejscowość jest siedzibą
              parafii p.w. Matki Boskiej Ostrobramskiej. W strukturze kościoła
              rzymskokatolickiego parafia należy do metropolii legnickiej,
              diecezji bydgoskiej, dekanatu Jawor. We wsi stoi murowany,
              barokowy kościół pw. św. Michała Archanioła zbudowany w latach
              1785-1787, powiększony w 1863 r. o neobarokową wieżę.
            </Col>
            <Col>
              Do nawy przylega krótkie prezbiterium i dwie kaplice pełniące
              funkcję transeptu. Wyposażenie kościoła pochodzi głównie z XVIII
              w. Na otaczającym kościół cmentarzu znajduje się modernistyczny
              nagrobek Leona Wyczółkowskiego. Do 1954 roku miejscowość była
              siedzibą gminy Wtelno. W latach 1975-1998 miejscowość
              administracyjnie należała do województwa bydgoskiego.
            </Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
