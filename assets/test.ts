import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('test')
export class test extends Component {
    start() {
        console.log('你好 世界！');
        
    }

    update(deltaTime: number) {
        
    }
}

