const List = (props) => {
  const { id, name, age, image, removePerson } = props;

  return (
    <>
      <article className="person">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
        <button className="btn-primary" onClick={() => removePerson(id)}>
          Remove
        </button>
      </article>
    </>
  );
};

export default List;
