const TopNav = () => {
  return (
    <nav>
      <div className="logo">
        <b>Book Store</b>
      </div>
      <div className="search-container">
        <input
          id="search"
          type="text"
          placeholder="Search by book name, author"
        />
        <button type="submit" className="btn-search">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
