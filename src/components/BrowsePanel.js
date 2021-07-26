import BrowseTopic from "./BrowseTopic";

const BrowsePanel = () => {
  return (
    <section className="sidebar-nav">
      <BrowseTopic type="category" name="Categories" />
      <BrowseTopic type="author" name="Authors" />
    </section>
  );
};

export default BrowsePanel;
