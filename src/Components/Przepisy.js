import React, { Component } from "react";
import ListaPrzepisow from "../Assets/Data/przepisy.json";
//import Mapa from "./Mapa";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";

class Przepisy extends Component {
  render() {
    return (
      <div>
        <h1>Przepisy</h1>
        {ListaPrzepisow.map((ListReceipes, index) => {
          return (
            <div classname="przepisy">
              <Card
                shadow={0}
                style={{
                  width: "250px",
                  height: "160px",
                  display: "block",
                  margin: "auto"
                }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff",
                    background:
                      "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
                  }}
                >
                  {ListReceipes.nazwa}
                  Kalorie: {ListReceipes.kalorie}
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
                  convallis.
                  {ListReceipes.IG}
                  {ListReceipes.GW}
                </CardText>
                <CardActions border>
                  <Button colored>View Receipe</Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
      //</div>
    );
  }
}

export default Przepisy;
