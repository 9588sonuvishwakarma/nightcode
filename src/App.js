import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import arya from "./components/arya";
// Introdction part......................................
const Introduction = () => <h1></h1>;
const Variable = () => <div>
  <hr></hr>
  <h1  style={{margin:"20px"}}>C++ Variables</h1>
  <p className="arya" style={{fontSize:"18px" , fontFamily:"Courier New", fontWeight:"bold"}} > In programming, a variable is a container (storage area) to hold data.

To indicate the storage area, each variable should be given a unique name (identifier)</p>
 <h4 className="example" style={{textAlign:"center", lineHeight:"40px"}}>For example. <span >int age = 14;</span></h4>
 <p className="arya" style={{fontSize:"18px" , fontFamily:"Courier New", fontWeight:"bold"}} >Here, age is a variable of the int data type, and we have assigned an integer value 14 to it.

Note: The int data type suggests that the variable can only hold integers. Similarly, we can use the double data type if we have to store decimals and exponentials.

We will learn about all the data types in detail in the next tutorial.

The value of a variable can be changed, hence the name variable.</p> 
 
</div>;

const Content = () => <h1>Content</h1>;
const Courses = () => <h1>Content/sonu</h1>;
const Videos = () => <h1>Content/videos</h1>;
const Design = () => <h1>Design</h1>;
const Content2 = () => <h1>Content2</h1>;
const Courses2 = () => <h1>Content/Courses 2</h1>;
const Videos2 = () => <h1>Content/Videos 2</h1>;
const Design2 = () => <h1>Design 2</h1>;

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          {/* improvememt, not recorded in video, its just looping through menuItems
          instead of hard coding all the routes */}
          {menuItems.map((menu, index) => (
            <>



            {/* heading  */}
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                <h1 style={{color:"blue"}}>{menu.name}</h1>
              </Route>



              {/* menu detail here....... */}
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1 style={{color:"blue"}}>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </>
          ))}

           <Switch>
            <Route exact path={"/"}>
              <Introduction />
            </Route>
            <Route exact path={"/Variable"}>
              <Variable />
            </Route>
            <Route exact path={"/content"}>
              <Content />
            </Route>
             <Route path={"/content/courses"}>
               <Courses />
            </Route>
              <Route path={"/content/videos"}>
               <Videos />
             </Route>
             <Route path={"/design"}>
               <Design />
             </Route>
             <Route exact path={"/content-2"}>
               <Content2 />
             </Route>
            <Route path={"/content-2/courses"}>
               <Courses2 />
             </Route>
            <Route path={"/content-2/videos"}>
              <Videos2 />
            </Route>
             <Route path={"/design-2"}>
              <Design2 />
             </Route> 
          </Switch> 
        </div>
      </Router>
    </div>
  );
}

export default App;
