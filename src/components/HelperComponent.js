const Seperate = ({ title, direction = "left" }) => {
  return <div className={`seperate border-bottom ${direction}`}>{title}</div>;
};

const LevelTitle = ({ first = "", second = "" }) => {
  return (
    <div className="title_level">
      <div className="empty"></div>
      <div className="title">
        <div className="beginner">{first}</div>
        <div className="expert">{second}</div>
      </div>
    </div>
  );
};


export { Seperate , LevelTitle}