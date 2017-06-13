// ---------------------------------------------------------
// Utilities function
// ---------------------------------------------------------
var errcode = require('./../errcode');
var fs = require("fs");

module.exports =
{
    responseConvention: function (code,data)
    {
        var JSONobj = {
            status: code,
            message: errcode.errorMessage(code),
            data: data
        };
        return JSONobj;
    },
    responseWithMessage: function (code,message,data)
    {
        var JSONobj = {
    		status: code,
    		message: message,
    		data: data
    	};
    	return JSONobj;
    },
    responsePhotos: function (code,message,photos)
    {
        var JSONobj = {
            status: code,
            message: message,
            photos: photos
        };
        return JSONobj;
    },
    chkObj: function (obj)
    {
        if ((obj === undefined || obj === null || obj.length == 0) == false) {
    		return true;
    	}
    	return false;
    },
    validateEmail: function (email)
    {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }
}
