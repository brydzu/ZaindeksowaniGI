import React, { Component } from "react";

class Kontakt extends Component {
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
        <h1>Kontakt</h1>
        <p>
          Wypełnij poniższy formularz, jeśli chcesz się z anmi skontaktować.
        </p>
        <p>
          Wybierz preferowany sposób kontaktu, a my odpiszemy lub oddzwonimy.
        </p>

        <p>Informacje te sa ...</p>
        <form>
          <label>
            <p>
              Imię:
              <input type="text" name="imie" />
            </p>
            <p>
              Nazwisko:
              <input type="text" name="nazwisko" />
            </p>
            <p>
              Numer telefonu:
              <input type="text" name="telefon" />
            </p>
            <p>
              Pytanie:
              <textarea type="textarea" name="pytanie" />
            </p>
          </label>
          <p>
            <input type="submit" value="Wyślij" />
          </p>
        </form>
      </div>
    );
  }
}

export default Kontakt;
