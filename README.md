# js-ping-server

This is an easy solving draft for a daily problem of me.
I need to know if a specific server is reachable. the "navigator.onLine" just say if there is internet or not.

The function isOnline needs the following params to work.
 - $urlToPing just a string to a file on the server. This is mostly set in the options.
 - $callback a function which is called after the check.
 - $optional optianal params which should be passed through to the callback-function.
