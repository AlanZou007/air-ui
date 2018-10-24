import * as React from 'react';
import logo from 'src/components/common/images/air.png';

class Index extends React.Component {
    render() {
        return (
            <div className='home'>
                <div className="air-logo">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        )
    }
}

export default Index;

