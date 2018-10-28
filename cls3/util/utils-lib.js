const uuidV1 = require('uuid/v1');

class UuidGenaretor {
    genaretorUuid(){
        return uuidV1();
    }
}

class DateTimeUtils{
    getTimeInticks(){
        var yourDate = new Date();
        var epochTicks = 621355968000000000;
        var ticksPerMillisecond = 10000;
        var yourTicks = epochTicks + (yourDate.getTime() * ticksPerMillisecond);
        return yourTicks;
    }
}


module.exports  = {UuidGenaretor,DateTimeUtils}; 