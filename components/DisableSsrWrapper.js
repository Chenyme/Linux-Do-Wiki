import dynamic from 'next/dynamic';
import React from 'react';

const DisableSsrWrapper = props => <React.Fragment>{props.children}</React.Fragment>;

export default dynamic(() => Promise.resolve(DisableSsrWrapper), {
    ssr: false
});
