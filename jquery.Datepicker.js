/**
 * Created by efi on 17/2/2015.
 */
(function($){
    $.fn.datepicker = function( ){

        var index = 0;
        var now = new Date();
        var thisMonth = new Date(now.getFullYear(), now.getMonth());
        var currentMonth = thisMonth;
        var lastDay= new Date(thisMonth.getFullYear(), thisMonth.getMonth() +1,0);
        var firstDay = new Date(thisMonth.getFullYear(),thisMonth.getMonth(),1);
        firstDay=firstDay.getDay();
        var numDays = lastDay.getDate();
        var Months = ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        var Days = ["Sun","Mon","Tue","Wen","Thu","Fri","Sat"];
        var parent = $("#datepicker");
        var header = $('<div id="dp-head"></div>');
        var body = $('<div id="dp-body"></div>');
        header.append('<button id="right-button" > > </button>');
        header.append('<button id="left-button"> < </button>');
        header.append('<h3 id="dp-title">'+ Months[currentMonth.getMonth()]+" "+currentMonth.getFullYear()+' </h3>');

        for(var i=0;i<Days.length;i++){
            body.append('<div class="dp-element">' + Days[i] + '</div>');
        }


        for(var i=0;i<firstDay;i++){
            body.append('<div class="dp-element"></div>');
        }

        for(var i=1;i<=numDays;i++){
            body.append('<div class="dp-element dp-day" id="'+i+'">' + i + '</div>');
        }

        parent.append(header);
        parent.append(body);

        var newMonth = function(index){
            currentMonth = new Date(thisMonth.getFullYear(), thisMonth.getMonth() +index);
            lastDay= new Date(thisMonth.getFullYear(), thisMonth.getMonth() +index+1,0);
            firstDay = new Date(thisMonth.getFullYear(),thisMonth.getMonth()+index,1);
            firstDay=firstDay.getDay();
            numDays = lastDay.getDate();
        };

        var show= function(){
            parent.empty();
            header.empty();
            body.empty();
            header.append('<button id="right-button" > > </button>');
            header.append('<button id="left-button"> < </button>');
            header.append('<h3 id="dp-title">'+ Months[currentMonth.getMonth()]+" "+currentMonth.getFullYear()+' </h3>');

            for(var i=0;i<Days.length;i++){
                body.append('<div class="dp-element">' + Days[i] + '</div>');
            }


            for(var i=0;i<firstDay;i++){
                body.append('<div class="dp-element"></div>');
            }

            for(var i=1;i<=numDays;i++){
                body.append('<div class="dp-element dp-day" id="'+ i +'">' + i + '</div>');
            }

            parent.append(header);
            parent.append(body);
        };

        $(document).on("click","#right-button",function(){
            index++;
            newMonth(index);
            show();
            console.log(index);

            console.log(currentMonth,thisMonth);

            if(currentMonth===thisMonth){
                console.log("fsdf")
                var id= now.getDate();
                $('#'+id).css("background-color","cyan");
            }

        });

        $(document).on("click","#left-button",function(){
            index--;
            newMonth(index);
            show();
            console.log(index);

            if(currentMonth==thisMonth){
                var id= now.getDate();
                $('#'+id).css("background-color","cyan");
            }

        });




    }
}(jQuery));