import PropTypes from "prop-types";

const AvailablePlayers = ({
  handleAvailablePlayers,
  availablePlayers,
  length,
}) => {
  //   console.log(length);
  return (
    <div className="flex justify-between md:items-center my-8 p-1">
      <div>
        <h1 className="text-2xl font-bold">
          {availablePlayers
            ? "Available Players"
            : `Selected Player (${length ? length : "0"}/6)`}
        </h1>
      </div>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0">
        <button
          onClick={() => handleAvailablePlayers(true)}
          className={`${availablePlayers ? "btn bg-[#E7FE29]" : "btn"}`}
        >
          Available
        </button>
        <button
          onClick={() => handleAvailablePlayers(false)}
          className={`${availablePlayers ? "btn" : "btn bg-[#E7FE29]"}`}
        >
          Selected ({length ? length : "0"})
        </button>
      </div>
    </div>
  );
};

AvailablePlayers.propTypes = {
  handleAvailablePlayers: PropTypes.func.isRequired,
  availablePlayers: PropTypes.bool.isRequired,
  length: PropTypes.number.isRequired,
};

export default AvailablePlayers;
