import { useState, createContext, useContext } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
	const [formOpen, setFormOpen] = useState(false);
	return (
		<GlobalContext.Provider value={[formOpen, setFormOpen]}>
			{props.children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => {
	const context = useContext(GlobalContext);

	if (context === undefined) {
		throw new Error(
			'GlobalContext must be used within a GlobalContextProvider',
		);
	}
	return context;
};
