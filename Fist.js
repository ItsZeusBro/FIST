import { View_ } from "./Source/MVC/View_/View_.js";
import * as fs from "node:fs"
export class Fist{
    constructor(){
        Fist.prototype.flow = this.flow;
        Fist.prototype.stream = this.stream;
        Fist.prototype.pound = this.pound; //not strictly necessary (for creating files)
        Fist.prototype.sprinkl = this.sprinkl; //not strictly necessary (for creating files)
        this.View_ = new View_()
    }

    flow(fist, tifier, ivity, atin, atout){
        this.View_.flow(fist, tifier, ivity, atin, atout)
        return this;
    }
    stream(fist, tifier, atin, atout){
        //tifier here means stream up to n number of bytes
        this.View_.stream(fist, tifier, atin, atout)
        return this;
    }
    //creates a file if it doesn't exist
    pound(imganirayFist){
        fs.openSync(imganirayFist, 'a');
    }
    //fills the file with data
    sprinkl(it){

    }
}