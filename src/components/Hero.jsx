import React from 'react';
import Project from './min/Project';
function Hero() {
    return (
        <div class='hero-container'>
            <h1>
                AA5 LABS
            </h1>
            <h3>
                Building the long term.<br></br><br></br>
            </h3>
            <div class='hero-row'>
                <Project asrc='https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'/>
                <Project asrc='https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'/>
                <Project asrc='https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'/>
            </div>
        </div>
    );
}

export default Hero;
