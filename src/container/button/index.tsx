import * as React from 'react';
import {Button, Panel} from 'src/components'

class ButtonContainer extends React.Component {
    render() {
        return (
            <div>
                <Panel title='一般用法' />
                <Button>默认</Button>
                <Button long>长按钮</Button>
                <Button btnType='ghost'>ghost</Button>
                <Button btnType='success'>success</Button>
                <Button btnType='warning'>warning</Button>
                <Button btnType='error'>error</Button>

                <Panel title='不同尺寸' />
                <Button size='large'>大尺寸</Button>
                <Button size='default'>默认尺寸</Button>
                <Button size='small'>小尺寸</Button>

                <Panel title='圆角的不同尺寸' />
                <Button shape="circle"  size='large'>大尺寸</Button>
                <Button shape="circle"  size='default'>默认尺寸</Button>
                <Button shape="circle"  size='small'>小尺寸</Button>

                <Panel title='不同状态' />
                <Button loading={true} >加载中按钮</Button>
                <Button disabled={true} >禁用按钮</Button>
            </div>
        )
    }
}

export default ButtonContainer;

