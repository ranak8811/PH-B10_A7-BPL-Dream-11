import { useState } from "react";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Banner from "./components/Banner/Banner";
import CardsContainer from "./components/CardsContainer/CardsContainer";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";

const App = () => {
  const [availablePlayers, setAvailablePlayers] = useState(true);
  const [chosenPlayers, setChosenPlayers] = useState([]);
  const [addCredit, setAddCredit] = useState(0);

  const handleAvailablePlayers = (status) => {
    if (status) {
      setAvailablePlayers(true);
    } else {
      setAvailablePlayers(false);
    }
  };

  const handleChosenPlayers = (player) => {
    // console.log(player);

    if (addCredit < player.biddingPrice) {
      errorNotify(
        "You don't have enough credit to buy this player. Claim more credits!!!"
      );
    } else {
      const isExist = chosenPlayers.find((p) => p.playerId === player.playerId);
      // console.log(isExist);
      const length = chosenPlayers.length;

      if (!isExist && length < 6) {
        const newChosenPlayers = [...chosenPlayers, player];
        setChosenPlayers(newChosenPlayers);
        setAddCredit(addCredit - player.biddingPrice);
        successNotify(`Congrates!! ${player.name} is now in your squad 🥳`);
      } else if (length >= 6) {
        errorNotify("Only 6 players can be added");
      } else {
        errorNotify(
          "This player has already been added to the selected players"
        );
      }
    }
  };

  const handleDeletePlayers = (id) => {
    // console.log(id);
    const deletedPlayer = chosenPlayers.find(
      (player) => player.playerId === id
    );
    // console.log(typeof deletedPlayer.name);
    const remainingPlayers = chosenPlayers.filter(
      (player) => player.playerId !== id
    );
    // console.log(remainingPlayers);
    setChosenPlayers(remainingPlayers);

    toast.warn(`${deletedPlayer.name} removed from your squad`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleAddCredit = () => {
    const totalCredit = addCredit + 20000000;
    setAddCredit(totalCredit);
  };

  const successNotify = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const errorNotify = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // console.log(availablePlayers);
  // console.log(chosenPlayers);
  return (
    <div className="container mx-auto p-3 lg:p-0">
      <Navbar addCredit={addCredit}></Navbar>
      <Banner
        handleAddCredit={handleAddCredit}
        successNotify={successNotify}
      ></Banner>
      <AvailablePlayers
        handleAvailablePlayers={handleAvailablePlayers}
        availablePlayers={availablePlayers}
        length={chosenPlayers.length}
      ></AvailablePlayers>
      {availablePlayers ? (
        <CardsContainer
          handleChosenPlayers={handleChosenPlayers}
        ></CardsContainer>
      ) : (
        <SelectedPlayers
          chosenPlayers={chosenPlayers}
          handleDeletePlayers={handleDeletePlayers}
          handleAvailablePlayers={handleAvailablePlayers}
        ></SelectedPlayers>
      )}
      <div className="relative">
        <Footer></Footer>
        <div className="absolute -top-40 md:-top-44 w-full mx-auto">
          <Newsletter></Newsletter>
        </div>
      </div>

      {/* react toastify notifications */}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
