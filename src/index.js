import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Match, Miss } from 'react-router';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={StorePicker}></Match>
                <Match pattern="/store/:storeId" component={App}></Match>
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )

}

render(<Root/>, document.querySelector('#main')); 