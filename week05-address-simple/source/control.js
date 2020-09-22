import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from './ElfHeader';
import Go from './Go';
import First from './First';
import App from './App';
import {saveByIndex, getByIndex, setLocalStorage, dataLoaded} from "./assets/address-local-storage";

const APPS = {
    App,
    Go,
    First
};
const addressList =
    [
        {
            "firstName": "Lamar",
            "lastName": "Alexander",
            "street": "455 Dirksen Senate Office Building",
            "city": "Washington DC",
            "state": "TN",
            "zip": "20510",
            "phone": "202-224-4944",
            "website": "https://www.alexander.senate.gov/public",
            "email": "",
            "contact": "http://www.alexander.senate.gov/public/index.cfm?p=Email"
        },
        {
            "firstName": "Susan",
            "lastName": "Collins",
            "street": "413 Dirksen Senate Office Building",
            "city": "Washington DC",
            "state": "ME",
            "zip": "20510",
            "phone": "202-224-2523",
            "website": "https://www.collins.senate.gov",
            "email": "",
            "contact": "http://www.collins.senate.gov/contact",
        }
    ]


function renderAppInElement(choice) {
    var AppTool = APPS[choice.dataset.app];
    if (!AppTool) return;

    // get props from elements data attribute, like the post_id
    const props = Object.assign({}, choice.dataset);

    ReactDOM.render(<AppTool {...props} />, choice);
}

window.onload = function () {
    setLocalStorage(addressList);
    ReactDOM.render(
        <ElfHeader/>,
        document.getElementById('root')
    );

    document
        .querySelectorAll('.__react-root')
        .forEach(renderAppInElement);
};

