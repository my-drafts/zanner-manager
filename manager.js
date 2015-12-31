
var tof = require('zanner-typeof'), is = tof.is, of = tof.of, ofs = tof.ofs;

var manager = function(){
	var items = [];

	this.get = function(fseach){
		if(is(fget, 'function')){
			return items.find(function(value, index){
				return fseach(value, index);
			});
		}
		throw '[manager.get]: fseach is not function';
	};
};


