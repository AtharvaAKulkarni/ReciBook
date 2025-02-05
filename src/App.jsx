import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Recipe } from "./Pages/Recipe";
import { RecipeList } from "./Pages/RecipeList";
import { Profile } from "./Pages/Profile";

function App() {
  

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='recipe/:id' element={<Recipe />} />
            <Route path='recipes/:category' element={<RecipeList />} />
            <Route path='/my-account' element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
