import { useEffect } from "react";

import { FastFoodContext } from "./context/index";
import { useLocalStorageState } from "ahooks";
import {
  Routes,
  useNavigate,
  Outlet,
  Route,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { LoginPage } from "./pages/login";
import { Menuu } from "./components/menu";
import { MenuBuyutma } from "./components/buyurtma"
import { MenuMahsulot } from "./components/index"
import {MenuCategory} from "./components/menuCategory";
import {FoodProducts} from "./data/product";
import { FoodCategorys } from "./data/category";
import { FoodUsers } from "./data/user"
import { Employees } from "./data/user"

function App() {
  const [tutorials, setTutorials] = useLocalStorageState("tutorials", {
    defaultValue: [...FoodProducts],
  });
  const [dataCategory, setDataCategory] = useLocalStorageState("dataCategory", {
    defaultValue: [...FoodCategorys],
  });
  const [dataUser, setDataUser] = useLocalStorageState("dataUser", {
    defaultValue: [...FoodUsers],
  });
const [employees, setEmployees] = useLocalStorageState("employees", {
    defaultValue: [...Employees],
  });

  const [userActivited, setUserActivited] = useLocalStorageState(
    "userActivited",
    { defaultValue: false }
  );
  const navigate = useNavigate();
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (userActivited && location.pathname === "/login") navigate("/");
    else if (!userActivited) navigate("/login");
  }, [userActivited]);



  return (
    <FastFoodContext.Provider
      value={{
        tutorials,
        setTutorials,
        dataCategory,
        setDataCategory,
        dataUser,
        setDataUser,
        employees,
        setEmployees,
      }}
    >
      <Routes>
        <Route
          path={"/login"}
          element={<LoginPage setUserActivited={setUserActivited} />}
        />

        <Route
          path={"/"}
          element={<Menuu setUserActivited={setUserActivited} />}

        >
          {/*<Route path={"board"} element={<Board />}></Route>*/}
          {/*<Route path={"settings"} element={<SettingsPage />}></Route>*/}
          {/* <Route path={":tutorial/:lesson"} element={<Lesson />}></Route>*/}

          <Route path={":tutorial"} element={location.pathname === "/buyurtmalar" ? (<MenuBuyutma/>) : "" || location.pathname === "/mahsulotlar" ? (<MenuMahsulot/>) : "" || location.pathname === "/kategoriya" ? (<MenuCategory/>) : "" }></Route>
        </Route>
      </Routes>
    </FastFoodContext.Provider>
  );
}

export default App;
