var app = {
    // Application Constructor
    initialize: function() {
            document.addEventListener("deviceready", this.onDeviceReady, false);
            this.onDeviceReady();     
    },

    onDeviceReady: function() {

        var t=setInterval(function(){
            window.location.href="main.html";
        },4000)
    },
};
app.initialize();