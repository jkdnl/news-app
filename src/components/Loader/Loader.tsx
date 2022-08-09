import React from 'react';
import {Spinner} from "flowbite-react";

function Loader() {
    return (
        <div className="text-center">
            <Spinner
                color="info"
                size="xl"
            />
            <div>Data is loading...</div>
        </div>
    );
}

export default Loader;