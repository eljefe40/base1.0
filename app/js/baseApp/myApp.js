console.log("myApp is running...");


var appScripts=
    [
    "/js/baseApp/test1.js",
    "/js/baseApp/test2.js"
    ];

var loader = new Loader();
loader.require(
    appScripts,
    function() {
        console.log('All Scripts Loaded');
    });
