import { Thing } from "./things";

class Fleet {
    private things: Thing[];

    constructor() {
        this.things = [];
    }

    add(thing: Thing) {
        this.things.push(thing);
    }

    print(){
      this.things.forEach(element => {
        let logString: string = String(element.getNumber());
        logString += '. '
        if (element.getCompleted() == true) {
          logString += '[x]';
        } else {
          logString += '[ ]';
        }
        console.log(logString,element.getName());
      });
    }
}

export { Fleet };