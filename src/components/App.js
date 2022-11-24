import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('gallina');
  
  function renderSolutionLetters (){
  const wordLetters = word.split(''); //split() divide un objeto de tipo String en un array
  return wordLetters.map((eachletter,index) => ( <li className="letter" key={index}></li>))
  
}
  function handleInput (event){
    console.log(event.target.value)
    const inputValue = event.target.value;
    const letters =/^[a-zA-Z]+$/; //función test que devuelve si es true o false, y comprueba si el input (entre paréntesis) coindice con la expresión regular
    if(letters.test(inputValue)){
    setLastLetter(inputValue);
    }else{
      setLastLetter('');
      console.log('no funciona')
    }
  }
  function handleClick() {
    setNumberOfErrors(numberOfErrors + 1); // sumamos 1 a la variable
  }
  const handleSubmit= (event) => {
    event.preventDefault();
  }

  return <div className="App">
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              {renderSolutionLetters()}
              {/* <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li> */}
            </ul>
          </div>
          <button onClick={handleClick}>Incrementar</button>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter" 
              pattern="[a-zA-Z]"             
              value={lastLetter}
              onInput={handleInput}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  </div >;
}


export default App;
