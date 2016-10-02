module.exports = {
	checkThisDevice: function () {
		 return (/iphone|ipod|ipad/).test(window.navigator.userAgent.toLowerCase());
	}
}
