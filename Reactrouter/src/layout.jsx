import React from 'react'; 
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        {/* Outlet is used as a placeholder for holding the changing child components like header and the footer remains the same only the component between them changes */}
        <Footer />
        </>
    );
}