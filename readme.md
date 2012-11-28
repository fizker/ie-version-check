IE Version Checker
==================

A simple javascript test for determining the actual version of IE.

It also detects if you are using IE in compatibility mode.

How to use
----------

Include the script file on your page (`<script src=ie-version.js></script>`),
and call the function (`var result = getIEVersion()`).

It returns an object with the following structure:

- version: The user-agent version of IE (as noted by the user-agent string).
- major: The major number of the version string.
- minor: The minor number of the version string.
- real: The actual version number. This is comparable to `version`.
- isReal: A bool that tells if it is the version it claims to be.

For IE9, it will produce the following values:

    { "version": "9.0"
    , "major": "9"
    , "minor": "0"
    , "real": "9.0"
    , "isReal": true
    }

while IE9 with browser mode as IE7 will produce

    { "version": "7.0"
    , "major": "7"
    , "minor": "0"
    , "real": "9.0"
    , "isReal": false
    }


Non-IE browsers with fake user-agent strings will produce something like

    { "version": "7.0"
    , "major": "7"
    , "minor": "0"
    , "real": 0
    , "isReal": false
    }
