//ALITY == Positionality
//Ivity == Clusivity
//Tality == Quantality


const ALITY = new RegExp("((end|beg|mid)((-|\+|\*|\/)?)((([1-9][0-9]*)?)(bin|nib|b|mb|gb|tb|%))?)(([1-9][0-9]*e[1-9][0-9]*((-|\+)[1-9][0-9]*)?)?)(([1-9][0-9]*e_[1-9][0-9]*((-|\+)[1-9][0-9]*)?)?)((0.[0-9][0-9]*((-|\+)[1-9][0-9]*)?)?)((e[1-9][0-9]*((-|\+)[1-9][0-9]*)?)?)((e_[1-9][0-9]*((-|\+)[1-9][0-9]*)?)?)(([1-9][1-9]*)?)");
const IVITY = new RegExp("(in|ex):((end|mid|beg)|(([0-9][0-9]*)))((\+|-|\/|\*|bin|nib|mb|gb|tb|eb|%|\.)?)(([0-9][0-9]*)?)((bin|nib|mb|gb|tb|eb|%)?)((e(([1-9][0-9]*(\+|-)?([1-9][0-9]*)?)|((((-|\+)[1-9][0-9]*)?)(\+|-)?([1-9][0-9]*)?)|()))?)");
const TALITY = new RegExp()



exports = {ALITY, IVITY, TALITY}