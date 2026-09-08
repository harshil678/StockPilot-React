import "./App.css";
import Navbar from "./components/partials/Navbar";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./components/pages/Portfolio";
import Activity from "./components/pages/Activity";
import Watchlist from "./components/pages/Watchlist";
import Wallet from "./components/pages/Wallet";
import Withdrawal from "./components/pages/Withdrawal";
import PaymentDetails from "./components/pages/PaymentDetails";
import StockDetails from "./components/pages/StockDetails";
import Profile from "./components/pages/Profile";
import SearchCoin from "./components/pages/SearchCoin";
import NotFound from "./components/pages/NotFound/NotFound";
import Auth from "./components/pages/Dwarpal/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./State/Auth/Action";

function App() {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  // console.log("--------Auth from store---------", auth);
  useEffect(() => {
    dispatch(getUser(auth.jwt || localStorage.getItem("jwt")));
  }, [auth.jwt]);
  return (
    <>
      {auth.user ? (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/activity" element={<Activity />}></Route>
            <Route path="/watchlist" element={<Watchlist />}></Route>
            <Route path="/wallet" element={<Wallet />}></Route>
            <Route path="/withdrawal" element={<Withdrawal />}></Route>
            <Route path="/payment-details" element={<PaymentDetails />}></Route>
            <Route path="/market/:id" element={<StockDetails />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/search" element={<SearchCoin />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
