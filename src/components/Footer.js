import React from 'react';
import { MDBFooter } from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter color="grey" className="text-center font-small">
            <p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright: Afiqah Rashid
            </p>
        </MDBFooter>
    );
}

export default Footer;