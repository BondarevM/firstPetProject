"use strict";

const a = (function(){
    const b = function() {
        console.log('123');
    };

    return {
        getPrivat: b
    };

}());

a.getPrivat();