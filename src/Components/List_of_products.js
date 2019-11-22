import React, { Component } from "react";
import styles from "../styles.css";
import ListaProduktow from "../Components/Produkty/lista/lista_produktow.json";
//import CSSModules from "react-css-modules";

class List_of_products extends Component {
  render() {
    return (
      <div classname="produkty-lista">
        <h1 style={{ marginLeft: "80px" }}>Lista produktów</h1>
        {ListaProduktow.map((ListDetail, index) => {
          return (
            <div
              classname="post"
              style={{
                borderRadius: "20px",
                borderStyle: "solid",
                color: "black",
                marginLeft: "80px",
                marginRight: "80px",
                marginTop: "5px"
              }}
            >
              <h2>{ListDetail.title}</h2>
              <h6>{ListDetail.date}</h6>
              <p>
                {ListDetail.body}
                {ListDetail.link}
              </p>
            </div>
          );
        })}
      </div>
      //</div>
    );
  }
}

export default List_of_products;
