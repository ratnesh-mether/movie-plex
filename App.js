import React from 'react';
import ReactDOM from 'react-dom/client';
const Title = () => (
    <h1>Welcome to New Learnings</h1>
)

const Header = () => {
    return (<div className="header">
        <div className="logo-container">
            <img
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
                alt="logo"
                className='logo' />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>)
}
const styleCard = {
    backgroundColor: "#f0f0f0",
}
const RestaruantCard = (props) => {
    const { resName, cuisin } = props;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8397d352d5d16fb4fbcec848d02c8045" alt="res-logo" />
            <h3>{resName}</h3>
            <h4>{cuisin}</h4>
            <h4>4.4 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaruantCard resName="Ratnesh Foods" cuisin="Biryani, North Indian, Asian" />
                <RestaruantCard resName="KFC" cuisin="Burger, Fast Food" />

            </div>
        </div>
    )
}
const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)