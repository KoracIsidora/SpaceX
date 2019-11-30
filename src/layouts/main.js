import { getRocketInfo } from "../utilities/space-x-service";
import { Rockets } from "../components/rockets";

class Main {
    constructor() {
        this.node = document.createElement('main');
        getRocketInfo().then(data => {
            data.forEach(item => {
                let rocket = new Rockets(item);
                this.node.appendChild(rocket.getNode());
            });
        }); 
    }

    getNode(){
        return this.node;
    }
}


export {
    Main
}