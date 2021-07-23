const LeftPanel = () => {
  return (
    <section className="sidebar-nav">
      <div className="category card book-scroll">
        <h5 className="card-header">Categories</h5>
        <span className="divider"></span>
        <ul>
          <li>
            <span>Novel</span>
          </li>
          <li>
            <span>Programming</span>
          </li>
          <li>
            <span>Nonfiction</span>
          </li>
        </ul>
      </div>
      <div className="author card book-scroll">
        <h5 className="card-header">Author</h5>
        <span className="divider"></span>
        <ul>
          <li>
            <span>Rabindranath Tagor</span>
          </li>
          <li>
            <span>Kyle Simpson</span>
          </li>
          <li>
            <span>Humayun Ahmed</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LeftPanel;
