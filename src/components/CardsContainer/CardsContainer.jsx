import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const CardsContainer = ({ handleChosenPlayers }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="my-10 mx-auto">
      <div className="grid grid-cols-1 w-full mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <div key={player.playerId}>
            <div className="card bg-base-100 w-96 shadow-xl border-2 p-4">
              <figure>
                <img
                  className="h-[240px] w-[376px] rounded-2xl"
                  src={player.image}
                  alt="Player"
                />
              </figure>
              <div className="mt-6 space-y-4">
                <div className="flex gap-4 text-xl items-center">
                  <i className="fa-solid fa-user"></i>
                  <h4 className="font-semibold">{player.name}</h4>
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <i className="fa-solid fa-flag"></i>
                    <h6 className="text-gray-500">{player.country}</h6>
                  </div>
                  <h5 className="bg-gray-100 px-3 py-1 rounded-xl">
                    {player.role}
                  </h5>
                </div>

                <hr className="my-6" />

                <h4 className="text-lg font-semibold">Rating</h4>

                <div className="flex justify-between">
                  <h5 className="font-semibold">
                    {player.battingType || "N/A"}
                  </h5>
                  <h5 className="text-gray-500">
                    {player.bowlingType || "N/A"}
                  </h5>
                </div>

                <div className="flex justify-between">
                  <div className="font-semibold">
                    Price: ${player.biddingPrice}
                  </div>
                  <button
                    onClick={() => handleChosenPlayers(player)}
                    className="btn border px-3 py-1 rounded-xl bg-gradient-to-r to-green-100 from-blue-100 cursor-pointer"
                  >
                    Choose Player
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

CardsContainer.propTypes = { handleChosenPlayers: PropTypes.func.isRequired };

export default CardsContainer;
