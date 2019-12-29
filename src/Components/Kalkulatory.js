import React, { Component } from "react";
import styles from "../styles.css";
import ListaProduktow from "../Components/Produkty/Lista/lista_produktow.json";
//import CSSModules from "react-css-modules";

class List_of_products extends Component {
  render() {
    return (
      <div classname="produkty-lista">
        <h1 style={{ marginLeft: "80px" }}>Lista produktów</h1>
        <table>
          <caption>Tabela indeksów</caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nazwa</th>
              <th>Kalorie</th>
              <th>Indeks glikemiczny</th>
              <th>Ładunek glikemiczny</th>
            </tr>
          </thead>
        </table>
        {ListaProduktow.map((ListDetail, index) => {
          return (
            <div classname="produkty">
              {/*classname="produkty"
          style={{*/}
              {/*borderRadius: "20px",
                //borderStyle: "solid",
                color: "black",
                marginLeft: "80px",
                marginRight: "80px",
                marginTop: "5px"*/}

              {/*}}}
              >*/}
              {/*<h2>{ListDetail.title}</h2>
              <h6>{ListDetail.date}</h6>
              <p>
                {ListDetail.body}
                {ListDetail.link}
            </p>*/}
              <table>
                {/*<caption>Tabela indeksów</caption>*/}
                <tbody>
                  <tr
                    style={{
                      nthChild(even) {
                        background: "lightgreen";
                      }
                    }}
                  >
                    <td>{ListDetail.id}</td>
                    <td>{ListDetail.nazwa}</td>
                    <td>{ListDetail.kalorie}</td>
                    <td>{ListDetail.IG}</td>
                    <td>{ListDetail.GW}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
      //</div>
    );
  }
}

export default List_of_products;
