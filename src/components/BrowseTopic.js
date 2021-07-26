const BrowseTopic = ({ type, name }) => {
  return (
    <div className={`${type} card book-scroll`}>
      <h5 className="card-header">{name}</h5>
      <span className="divider"></span>
      <ul>
        {/* TODO: in-future load from props */}
        <li>
          <span>{type} one</span>
        </li>
        <li>
          <span>{type} two</span>
        </li>
        <li>
          <span>{type} three</span>
        </li>
      </ul>
    </div>
  );
};

export default BrowseTopic;
