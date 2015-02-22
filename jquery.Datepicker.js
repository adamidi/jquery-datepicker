/**
 * Created by efi on 17/2/2015.
 */
(function ($) {
    $.fn.datepicker = function (options) {

        return this.each(function () {

            //initialize variables & methods
            var settings = $.extend({
                closeOnDayClick: false,
                highlightToday: true,
                closeButtonOption: false
            }, options);

            var index = 0; //basis for calculating currently showing month
            var now = new Date();
            var thisMonth = new Date(now.getFullYear(), now.getMonth());
            var currentMonth = thisMonth;
            var lastDay = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + 1, 0);
            var firstDay = new Date(thisMonth.getFullYear(), thisMonth.getMonth(), 1);
            firstDay = firstDay.getDay();
            var numDays = lastDay.getDate();
            var Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var Days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
            var parent = $(this);
            var plugin = $('<div class="datepicker"></div>');
            plugin.css("left",this.offsetLeft);
            var header = $('<div class="dp-head"></div>');
            var body = $('<div class="dp-body"></div>');
            var closeButton = $('<button class="close-button">OK</button>');
            var nextButton = $('<button class="right-button"> &gt; </button>');
            var prevButton = $('<button class="left-button"> &lt; </button>');

            var newMonth = function (index) {
                //calculate currently showing month, the number of days it has, and the day of the week it starts
                currentMonth = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + index);
                lastDay = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + index + 1, 0);
                firstDay = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + index, 1);
                firstDay = firstDay.getDay();
                numDays = lastDay.getDate();
            };

            var show = function () {
                //Construct html
                plugin.empty();
                header.empty();
                body.empty();
                header.append(nextButton);
                header.append(prevButton);

                header.append('<h3 class="dp-title">' + Months[currentMonth.getMonth()] + " " + currentMonth.getFullYear() + ' </h3>');

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

                //add close button according to settings
                if (settings.closeButtonOption == true) {
                    plugin.css("height", "210");
                    plugin.append(closeButton);
                }
                parent.after(plugin);

                //Highlight today's date
                if (settings.highlightToday == true) {
                    if (currentMonth.getTime() == thisMonth.getTime()) {
                        var id = now.getDate();
                        var day = plugin.find('#' + id);
                        day.addClass("today");
                    }
                }

                //add button events
                nextButton.click(function () {
                    index++;
                    newMonth(index);
                    show();
                });

                prevButton.click(function () {
                    index--;
                    newMonth(index);
                    show();
                });

                closeButton.click(function () {
                    plugin.toggle();
                });

                body.children(".dp-day").click(function(e){
                    parent.attr("value", this.id + "/" + (currentMonth.getMonth() + 1) + "/" + currentMonth.getFullYear());
                    if (settings.closeOnDayClick == true) {
                        plugin.toggle();
                    }
                });
            };

            parent.click(function () {
                show();
                plugin.toggle();
            });

        });

    }
}(jQuery));