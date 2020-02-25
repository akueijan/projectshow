var index_view = new Vue({
    el: "#app",
    data: {
        showTime: false,
    },
    methods: {
        
    },
    mounted: function() {
        var vm = this;

        // vm.sakuraBg();
        sakuraBg(1000);
    }
})
