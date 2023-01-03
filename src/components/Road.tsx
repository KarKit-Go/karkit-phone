import { ReactComponent as Car } from "../assets/Car.svg";
import { ReactComponent as RoadSign } from "../assets/roadSign.svg";

import "../styles/Road.css";

const Road = () => {
  return (
    <>
      <div className="road">
        <div className="car">
          <div className="road-sign">
            <RoadSign />
          </div>
          <Car />
        </div>
      </div>
    </>
  );
};

export default Road;
