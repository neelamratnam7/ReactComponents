
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
export default function App({name,preparation,Serves,Difficulty,Type, chefname})
{
  return (
    <div className="container">
    <NavBar name={name}preparation={preparation}/>
     <Body Serves = {Serves}Difficulty={Difficulty}Type={Type}/>
     <Footer chefname ={chefname}/>
    </div>
  );
}