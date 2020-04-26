$(document).ready(function(){
   
    (function startQuiz (){

        this.loadQuiz = function(){
            $(".panel-one h1").show('drop', 1000,function(){
                $(".start-quiz").addClass("started", 800);
            });

            $(".start-quiz").on("click",function(){
                showPanel(1)
            })
        }
        this.showPanel = function(position){ //the position is to show the current panel
            var current = $('div[data-panel="'+ (position -1) +'"]') //this is to hide and move to the next panel
            current.find(".wrapper").animate({left:"-=100px", opacity:0},800,function(){
                
                //hide first panel
                current.addClass("hidden");
                //show second panel and so on.
            var next = $('div[data-panel="' + position + '"]')
            next.removeClass("hidden");
                showNext(next)
            })
        };
        this.showNext = function(next){
            var wrapper = next.find(".wrapper");
            wrapper.fadeIn('500',function(){
                manageOptions(next)
            })
        }
        this.manageOptions = function(next){
            var options = next.find(".options");
            var childrens = options.find("div");
            var counter = 0;

            childrens.each(function(i, el){
                $(el).delay(counter).fadeIn(240);
                counter += 600;
            })

            childrens.on("click", function(){
                childrens.removeClass('active')
                $(this).addClass('active');
                 })
        }
        loadQuiz();

    })();
   
});