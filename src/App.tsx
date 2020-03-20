import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import AddressMain from "./components/AddressMain";

const App = () => <Provider store={store}><AddressMain /></Provider>;

export default App;