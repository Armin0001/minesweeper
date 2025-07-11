import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Cell from "./components/Cell";
import { totalNumber } from "./lib/mineSpawn";
import { createContext } from "react";
import Modal from "react-modal";

function App() {
  let subtitle;
  const [revelaed, setRevealed] = useState(0);
  const [startGame, setStart] = useState(true);
  const [theMines, setTheMines] = useState<any>();
  useEffect(() => {
    setTheMines(totalNumber());
  }, []);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  Modal.setAppElement("#root");
  function afterOpenModal() {
  }
  function openModal() {
    setIsOpen(true);
    setStart(false);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  // let theMines = totalNumber();

  const endGame = () => {};

  const ThemeContext = createContext(0);

  return (
    <ThemeContext value={revelaed}>
      <div className="customGrid">
        {theMines?.map((i: any) => (
          <span onClick={() => handleClick(i)}>
            <Cell>{i}</Cell>
          </span>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Game lost</h2>
        <div className="flex gap-2">
          <button>New Game?</button>
          <button>View Highscores</button>
        </div>
      </Modal>
    </ThemeContext>
  );
}

export default App;
