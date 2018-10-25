import * as React from 'react';
import {Panel, CellGroup, Cell} from 'src/components';
import {RouteComponentProps} from 'react-router-dom';

import logo from 'src/components/common/images/air.png';

import './index.less'

class Index extends React.Component<RouteComponentProps, any> {

    onClick=(str:string) => {
        this.props.history.push(str);
    };

    render() {
        return (
            <div className='home'>
                <div className="air-logo">
                    <img className='air-logo--img' src={logo} alt="logo"/>
                </div>
                <Panel title='布局'>
                    <CellGroup>
                        <Cell title='Panel 面板' isLink  url='/panel'  onClick={this.onClick}/>
                        <Cell title='Cell 列表'  isLink  url='/cell' onClick={this.onClick}/>
                    </CellGroup>
                </Panel>
                <Panel title='基础组件'>
                    <CellGroup>
                        <Cell title='Button 按钮' isLink url='/button' onClick={this.onClick} />
                    </CellGroup>
                </Panel>
            </div>
        )
    }
}

export default Index;

