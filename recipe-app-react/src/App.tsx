import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Browse from "./pages/Browse";
import RecipeDetails from "./pages/RecipeDetails";
import SearchDetails from "./pages/SearchDetail";
import CategoryDetails from "./pages/CategoryDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/search" element={<SearchDetails />} />
        <Route path="/recipe/:slug" element={<RecipeDetails />} />
        <Route path="/category/:slug" element={<CategoryDetails />} />
      </Routes>
    </Router>
  );
};

export default App;