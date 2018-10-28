const utils  = require('./util/utils-lib');
const genaretor = new utils.UuidGenaretor();

let uuid  = genaretor.genaretorUuid()

console.log(uuid); 

const dt = new utils.DateTimeUtils();

let ticks  = dt.getTimeInticks();
console.log(ticks);