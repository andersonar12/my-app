import PropTypes from "prop-types";
/*  */
import CounterApp from "./CounterApp";

const FirstApp = ({ saludo, subtitulo = "Soy un subtitulo" }) => {
  return (
    <div>
      <h1>{saludo}</h1>
      <h3>{subtitulo}</h3>
      <hr></hr>
      <CounterApp value={20} />
    </div>
  );
};

/* Definir el tipo de propiedades del compponente */
FirstApp.prototype = {
  saludo: PropTypes.string.isRequired, // Podemos darle a entender a otros programadores que debe ser obligatorio
};
export default FirstApp;
