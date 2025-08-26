
export default function NavBar({name,preparation})
{
    return (
      <nav className="header">
        <h1>{name}</h1>
        <h2>{preparation}</h2>
      </nav>

    );
}