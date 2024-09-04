import './App.css';
import {Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./store/configureStore";
import AdminPanel from "./components/AdminPanel";
import MainSite from "./components/MainSite";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<MainSite/>}/>
                        <Route path='/admin' element={<AdminPanel/> }/>
                        <Route path='/:section' element={<MainSite/> }/>
                        <Route path='*' element={<MainSite/>}/>
                    </Route>
                </Routes>
            </PersistGate>
        </Provider>
    );
}

export default App;