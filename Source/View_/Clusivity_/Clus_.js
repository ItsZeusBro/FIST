export class Clus{
    constructor(){
        this.reg= /(in|ex):(^((\+|\-)?((beg|end|mid)|([0-9]*\.?[0-9]*e\+?\-?[0-9]*)|([0-9]*\.[0-9]*)|(bin|bit|kbit|mbit|gbit|tbit|pbit|ebit)|([0-9]*))%?)((?!\*\*)(\*|\+|\-|\\|\/)?(\+|\-)?(((beg|end|mid)|([0-9]*\.?[0-9]*e\+?\-?[0-9]*)|([0-9]*\.[0-9]*)|(bin|bit|kbit|mbit|gbit|tbit|pbit|ebit)|([0-9]*))%?)?)*)/g;
    }
}