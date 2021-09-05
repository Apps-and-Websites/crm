import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import Home from "./components/pages/Home";
import Header from "./components/pages/Header";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Footer from "./components/pages/Footer";
import Logos from "./components/pages/Logos";

import Admin from "./components/admin/Admin.js";
import DashboardAdmin from "./components/admin/dashboardAdmin";

function App() {
  return (
    <main id="page" class="container">
      <Route path="/:id" component={Header} />
      <Route exact path="/" component={Home} />

      <Route exact path="/logos" component={Logos} />
      <Route exact path="/projects" component={Projects} />
      <PrivateRoute path="/admin">
        <DashboardAdmin />
      </PrivateRoute>
    </main>
  );
}

export default App;
