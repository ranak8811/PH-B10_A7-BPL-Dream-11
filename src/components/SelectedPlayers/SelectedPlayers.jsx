import PropTypes from "prop-types";

const SelectedPlayers = ({
  chosenPlayers,
  handleDeletePlayers,
  handleAvailablePlayers,
}) => {
  //   console.log(chosenPlayers.length);
  return (
    <div>
      {chosenPlayers.map((player) => (
        <div key={player.playerId}>
          {
            <div className="flex justify-between border-2 rounded-xl p-4 my-3">
              <div className="flex gap-5">
                <div className="">
                  <img
                    className="w-[90px] h-[90px] object-cover rounded-xl"
                    src={player.image}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{player.name}</h3>
                  <p className="text-gray-500">{player.role}</p>
                  <p className="text-gray-500">
                    <span className="text-black font-semibold">Price:</span> $
                    {player.biddingPrice}
                  </p>
                </div>
              </div>

              <button onClick={() => handleDeletePlayers(player.playerId)}>
                <i className="fa-solid fa-trash-can text-red-500 text-2xl"></i>
              </button>
            </div>
          }
        </div>
      ))}

      <button
        onClick={() => handleAvailablePlayers(true)}
        className="btn bg-[#E7FE29] my-8"
      >
        Add More Player
      </button>
    </div>
  );
};

SelectedPlayers.propTypes = {
  chosenPlayers: PropTypes.array.isRequired,
  handleDeletePlayers: PropTypes.func.isRequired,
  handleAvailablePlayers: PropTypes.func.isRequired,
};

export default SelectedPlayers;
