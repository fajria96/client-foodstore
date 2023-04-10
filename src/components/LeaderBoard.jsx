import leaderBoardImg from "../assets/images/chopstick.jpg";

const LeaderBoard = () => {
  return (
    <div className="bg-white">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h3 className="text-2xl font-medium">
            Satisfy Your Favorite Japanese Dishes Cravings Today!
          </h3>
          <br />
          <p className="text-lg">
            Look No Further Than{" "}
            <span className="text-orange-700">Yukari Sushi House</span>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={leaderBoardImg}
            alt=""
            className="w-[400px] h-[100px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
