import React, { useState, useEffect } from 'react';
import wordTable from './assets/data';
import Footer from './components/Footer';

function App() {
  const [epicPhrase, setEpicPhrase] = useState([]);

  const randomEpicPhrase = () => {
    const PHRASE_LENGTH = 4;
    const ROWS = 10;
    const newEpicPhrase = [];

    for (let i = 0; i < PHRASE_LENGTH; i += 1) {
      const randomRow = Math.floor(Math.random() * ROWS);
      newEpicPhrase[i] = wordTable[randomRow][i];
    }

    setEpicPhrase(newEpicPhrase);
  };

  const handleClick = (event) => {
    const { name, value } = event.target;
    const updateEpicPhrase = [...epicPhrase];

    updateEpicPhrase[name] = value;

    setEpicPhrase(updateEpicPhrase);
  };

  useEffect(() => {
    randomEpicPhrase();
  }, []);

  return (
    <div>
      <main className="epic-main ">

        <button type="button" className="epic-button" onClick={ randomEpicPhrase }>
          <h1 className="epic-title">10 mil maneiras de não dizer nada!</h1>
          <h2 className="epic-subtitle">
            Seja uma máquina de vencer! Intelectual e assertiva!
          </h2>
        </button>

        <p className="epic-phrase">{epicPhrase.join(' ')}</p>

        <table className="epic-table">
          <tbody>
            {wordTable.map((row, iRow) => (
              <tr key={ iRow }>
                {row.map((cell, iCell) => (
                  <label key={ `${iRow}${iCell}` } htmlFor={ `${iRow}${iCell}` }>
                    <input
                      className="epic-radio"
                      type="radio"
                      name={ iCell }
                      value={ cell }
                      id={ `${iRow}${iCell}` }
                      onClick={ (event) => handleClick(event) }
                    />
                    <td className="epic-cell">{cell}</td>
                  </label>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

      </main>

      <Footer />

    </div>
  );
}

export default App;
