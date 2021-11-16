import React from "react";
import { Router, Switch } from "react-router-dom";

import { AuthProvider } from "./AuthContext";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Vacina from "./pages/Vacina";
import Registro from "./pages/Registro";
import Cadastro from "./pages/Cadastro";
import CustomRoute from "./CustomRoute";
import history from "./history";

export default function App() {
	return (
		<AuthProvider>
			<Router history={history}>
				<div className="app">
					<div className="app-box">
						<Menu />
						<Switch>
							<CustomRoute exact path="/login" component={Login}/>
							<CustomRoute exact path="/cadastro" component={Cadastro}/>
							<CustomRoute isPrivate exact path="/vacina" component={Vacina}/>
						</Switch>
					</div>
				</div>
			</Router>
		</AuthProvider>
	);
}
