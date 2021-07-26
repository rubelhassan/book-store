import BrowseCard from "./BrowseCard";

const BrowsePanel = () => {
  return (
    <section className="sidebar-nav">
      <BrowseCard type="category" title="Categories" />
      <BrowseCard type="author" title="Authors" />
    </section>
  );
};

export default BrowsePanel;
