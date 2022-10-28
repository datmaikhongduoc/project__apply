import { Fragment } from "react";
import Header from "./Header.js";
import Main from "./Main.js";


const DefaultLayout  = () => {
    // show menu 

    return (
        <>
            <Header />
            <Main/>
        </>
    );
}
export default DefaultLayout;