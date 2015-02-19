/**
 * Created by efi on 17/2/2015.
 */
(function ($) {
    $.fn.datepicker = function () {

        var index = 0;
        var now = new Date();
        var thisMonth = new Date(now.getFullYear(), now.getMonth());
        var currentMonth = thisMonth;
        var lastDay = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + 1, 0);
        var firstDay = new Date(thisMonth.getFullYear(), thisMonth.getMonth(), 1);
        firstDay = firstDay.getDay();
        var numDays = lastDay.getDate();
        var Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var Days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
        var parent = $("#dp-plugin");
        var plugin = $('<div id="datepicker"></div>');
        var header = $('<div id="dp-head"></div>');
        var body = $('<div id="dp-body"></div>');
        header.append('<button id="right-button" > > </button>');
        header.append('<button id="left-button"> < </button>');
        header.append('<h3 id="dp-title">' + Months[currentMonth.getMonth()] + " " + currentMonth.getFullYear() + ' </h3>');

        for (var i = 0; i < Days.length; i++) {
            body.append('<div class="dp-element">' + Days[i] + '</div>');
        }


        for (var i = 0; i < firstDay; i++) {
            body.append('<div class="dp-element"></div>');
        }

        for (var i = 1; i <= numDays; i++) {
            body.append('<div class="dp-element dp-day" id="' + i + '">' + i + '</div>');
        }

        plugin.append(header);
        plugin.append(body);
        parent.after(plugin);

        var newMonth = function (index) {
            currentMonth = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + index);
            lastDay = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + index + 1, 0);
            firstDay = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + index, 1);
            firstDay = firstDay.getDay();
            numDays = lastDay.getDate();
        };

        var show = function () {
            plugin.empty();
            header.empty();
            body.empty();
            header.append('<button id="right-button" > > </button>');
            header.append('<button id="left-button"> < </button>');
            header.append('<h3 id="dp-title">' + Months[currentMonth.getMonth()] + " " + currentMonth.getFullYear() + ' </h3>');

            for (var i = 0; i < Days.length; i++) {
                body.append('<div class="dp-element">' + Days[i] + '</div>');
            }

            for (var i = 0; i < firstDay; i++) {
                body.append('<div class="dp-element"></div>');
            }

            for (var i = 1; i <= numDays; i++) {
                body.append('<div class="dp-element dp-day" id="' + i + '">' + i + '</div>');
            }

            plugin.append(header);
            plugin.append(body);
        };

        $(document).on("click", "#right-button", function () {
            index++;
            newMonth(index);
            show();

            if (currentMonth.getTime() == thisMonth.getTime()) {
                var id = now.getDate();
                $('#' + id).css("background-color", "salmon");
            }
        });

        $(document).on("click", "#left-button", function () {
            index--;
            newMonth(index);
            show();

            if (currentMonth.getTime() == thisMonth.getTime()) {
                var id = now.getDate();
                $('#' + id).css("background-color", "salmon");
            }

        });

        if (currentMonth == thisMonth) {
            var id = now.getDate();
            $('#' + id).css("background-color", "salmon");
        }

        parent.click(function () {
            plugin.toggle();
        });

        $(document).on("click", ".dp-day", function () {
            parent.attr("value", this.id + "/" + (currentMonth.getMonth() + 1) + "/" + currentMonth.getFullYear());

        });


    }
}(jQuery));