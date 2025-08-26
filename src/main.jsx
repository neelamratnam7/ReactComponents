import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById('root'));
import "./index.css";
import App from "./App";
function Names()
{
    return (
      <>
      <h1 className="receipeBook">Receipe Book</h1>
        <div className="cards">
          <App 
          name ="Masala Chai Receipe"
          preparation ="Prep Time: 5 minutes | Cook Time: 10 minutes"     
          Serves = " 2 people"
          Difficulty = "Easy"
          Type = "Beverage"
          chefname = "Prepared By Ratnam"/>

          <App
          name = "Cold Coffee"
          preparation = "Prep Time: 10 minutes | Cook Time: 15 minutes"
          Serves = "4 people"
          Difficulty = "Moderate"
          Type = "Beverage"
          chefname = "Prepared By Neelam"/>
          
          <App 
          name = "Biryani" 
          preparation = "Prep Time: 60 minutes | Cook Time: 50 minutes"
          Serves = "6 people"
          Difficulty = "More Difficulty"
          Type = "Lunch/Dinner"
          chefname = "Prepared By Jagadeesh"/>
          
          <App 
          name = "Green tea"
          preparation = "Prep Time: 12  minutes | Cook Time: 8 minutes"
          Serves = "1 people"
          Difficulty = "Moderate"
          Type = "Easy"
          chefname = "Prepared By Loki"/>
         
         <App
          name = "Filter Coffee" 
          preparation = "Prep Time:18 minutes | Cook Time: 20 minutes"
          Serves = "3 people"
          Difficulty = "Moderate"
          Type = "Bevarage"
          chefname = "Prepared By Vamsi"/>
          
          <App         
          name = "Ice Cream" 
          preparation = "Prep Time: 25minutes | Cook Time: 30 minutes"
          Serves ="4 people"
          Difficulty = "Moderate"
          Type =  "Dessert"
          chefname ="Prepared By Chandra"/>

         <App 
          name = "Dosa"
          preparation = "Prep Time: 60 minutes | Cook Time: 30 minutes"
          Serves = "3 people"
          Difficulty = "Moderate"
          Type = "Breakfast"
           chefname ="Prepared By Sai"/>

          <App 
          name = "Upma" 
          preparation = "Prep Time: 50 minutes | Cook Time: 25 minutes"
          Serves = "2 people"
          Difficulty = "Moderate"
          Type = "Breakfast"
         chefname = "Prepared By Pallavi"/>
        </div>
        </>
    );
   }
root.render(<Names/>);
