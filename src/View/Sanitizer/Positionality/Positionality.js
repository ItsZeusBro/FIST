export class Positionality{
    constructor(string){
     //if we don't catch it throw an exception
        this.ality = new RegExp("\\b(((end|beg|mid)((\\-|\\+|\\*|\\\|\\/)?)((([1-9][0-9]*)?)(bin|nib|b|mb|gb|tb|%))?)(([1-9][0-9]*e[1-9][0-9]*((\\-|\\+|\\*|\\\|\\/)[1-9][0-9]*)?)?)(([1-9][0-9]*e_[1-9][0-9]*((\\-|\\+|\\*|\\\|\\/)[1-9][0-9]*)?)?)((0.[0-9][0-9]*((\\-|\\+|\\*|\\\|\\/)[1-9][0-9]*)?)?)((e[1-9][0-9]*((\\-|\\+|\\*|\\\|\\/)[1-9][0-9]*)?)?)((e_[1-9][0-9]*((\\-|\\+|\\*|\\\|\\/)[1-9][0-9]*)?)?)(([1-9][1-9]*)?))\\b", "g");
    }
    sanitize(){
        
    }
}
