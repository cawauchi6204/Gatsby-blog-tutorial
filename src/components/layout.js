import React from 'react'
import Header from './header'
import Footer from './footer'

import './layout'

export default Layout = ({ children }) => {
    <div>
        <Header />
        {children}
        <Footer />
    </div>
}
