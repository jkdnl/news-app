import React from 'react';
import {Alert} from "flowbite-react";

function ErrorMessage({error}: { error: string }) {
    return (
        <div className="sm:max-w-[65%] mx-auto">
            <Alert
                color="failure"
            >
                <span className="font-medium">
                  {error}
                </span>
            </Alert>
        </div>
    );
}

export default ErrorMessage;