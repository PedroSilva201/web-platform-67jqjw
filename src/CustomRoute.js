import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { Context } from "./AuthContext";

// eslint-disable-next-line react/prop-types
const CustomRoute = ({isPrivate, ...rest}) => {
	const { logado, isLoading } = useContext(Context);

	if (isLoading) {
		console.log("Lendo o storage. Destino:", rest.path);
		return <h3>Carregando...</h3>;
	}

	if( isPrivate && !logado ){
		return <Redirect to="/login" />;
	}

	console.log("Componente renderizado:", rest.path);
	return <Route {...rest} />;
};

export default CustomRoute;
