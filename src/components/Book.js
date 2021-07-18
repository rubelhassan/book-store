function Book(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <b>${props.price}</b>
      <p>{props.description}</p>
    </div>
  );
}

export default Book;
