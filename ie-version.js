var getIEVersion = (function() {
	var isIE = /MSIE/i
	  , uaVersion = /MSIE ((\d+)\.(\d+))/

	return getIEVersion
	function getIEVersion() {
		if(!isIE.test(navigator.userAgent)) {
			return { version: 0, real: 0, major: 0, minor: 0, isReal: false }
		}

		// This gets the actual version of IE, -1 if the IE version is too new (10+)
		// or 0 if not IE.
		var trueVersion =
		/*@cc_on (function() {
			switch(@_jscript_version) {
				case 1.0: return 3;
				case 3.0: return 4;
				case 5.0: return 5;
				case 5.1: return 5;
				case 5.5: return 5.5;
				case 5.6: return '6.0';
				case 5.7: return '7.0';
				case 5.8: return '8.0';
				case 9: return '9.0';
				case 10: return '10.0';
				default: -1;
			}
		})() || @*/ 0;
		var versions = navigator.userAgent.match(uaVersion)
		return { version: versions[1]
		       , major: versions[2]
		       , minor: versions[3]
		       , real: trueVersion
		       , isReal: trueVersion == versions[1]
		       }
	}
})()
