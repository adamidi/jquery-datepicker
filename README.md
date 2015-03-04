jQuery Datepicker plugin
========================

Simple datepicker jQuery plugin that supports multiple instances.

How to use
----------

```js
$("#elemId").datepicker();
```

or if you want to apply it to multiple elements:

```js
$(".elemClass").datepicker();
```

Options
-------

There are also some available options that allow customization.

- **closeOnDayClick**: when set to true, the datepicker closes as soon as the date is selected. The default value is false.
- **highlightToday**: when set to true, today's day is highlighted. The default value is true.
- **closeButtonOption**: when set to true, a close button appears on the buttom of the datepicker. Default value is false

Calling with options example :

```js
$("elemId").datepicker({closeButtonOption:true});
```
