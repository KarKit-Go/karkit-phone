import "../styles/MsgSide.css";

interface IDisplayMessage {
  side_num: number;
  side_text: String;
}

const DisplayMessage = (props: IDisplayMessage) => {
  return (
    <div className="message">
      <div className="side-num">{props.side_num}</div>
      <div className="side-text">{props.side_text}</div>
    </div>
  );
};

const MsgSide = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="basic-msg">
          <DisplayMessage side_num={2.5} side_text={"Distance"} />
          <DisplayMessage side_num={52} side_text={"Range"} />
          <DisplayMessage side_num={24} side_text={"Speed"} />
        </div>
      </div>
      <div className="speed">
        <div className="speed-num">43</div>
        <div className="speed-text">km/h</div>
      </div>
      <div className="back-color">
        <div className="random-color" />
      </div>
      <div className="speed-cirque"></div>
    </div>
  );
};

export default MsgSide;
