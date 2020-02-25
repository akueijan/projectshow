var game_view = new Vue({
    el: "#app",
    data: {
        stepPage: "",
        scenPage: "",
    },
    methods: {
        transition() {
            var vm = this;
            vm.transPage = true;
            sakuraBg(2000);
            var tl = new TimelineMax({
                delay: 1.2,
                onComplete: () => {
                    vm.transPage = false;
                }
            });
            tl.to("#tranarea",1.5,{
                x: 400,
                opacity: 0,
            })
            tl.to("#tranarea",1.5,{
                x: -400,
            })
            
        },

        fbShare() {
            var vm = this;
        }

    },
    mounted: function() {
        var vm = this;

        vm.transition();
        // var canG = new Game();
        // canG.creatScenes("./images/base.jpg");
        // canG.creatItems("./images/sakuratree-1.png",10,10);
        
    }
})
