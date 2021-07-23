const BrowseCard = ({ title, type }) => {
  return (
    <div className={`${type} card book-scroll`}>
      <h5 className="card-header">{title}</h5>
      <span className="divider"></span>
      <ul>
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

export default BrowseCard;
