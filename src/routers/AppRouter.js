import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import Help from "../components/Help";
import NotFound from "../components/NotFound";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
//Our Router Configuration in JSX form
const AppRuoter = () => (
  <BrowserRouter>
    <div>
      {/* Header will be displayed on all pages */}
      <Header />
      {/*Routes checks the URL in the Browser and compares it with Route if matched then it will go to that particular element otherwise it
        will go to Route path = "*"*/}
      <Routes>
        {/*It will tell BrowserRouter that whenever a webpage whose address is "/" go to ExpenseDashboardPage*/}
        <Route exact path="/" element={<ExpenseDashboardPage />} />
        <Route path="/create" element={<AddExpense />} />
        <Route path="/edit/:id" element={<EditExpense />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);
export default AppRuoter;
