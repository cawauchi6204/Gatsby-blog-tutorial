import React from 'react'
import Header from './header'
import Footer from './footer'

import './layout.css'

export default ({ children }) => {
    return (

        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
