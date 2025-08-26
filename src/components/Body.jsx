
export default function Body({Serves,Difficulty,Type})
{
  return (
    <section className="info">
      <p><strong>Serves &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</strong>{Serves}</p>
      <p><strong>Difficulty &nbsp;:&nbsp; </strong>{Difficulty}</p>
      <p><strong>Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</strong>{Type}</p>
    </section>
  );
}