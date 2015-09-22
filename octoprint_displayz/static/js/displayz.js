$(function() {
    function DisplayZViewModel() {
        var self = this;

        self.onStartup = function() {
            var element = $("#state").find(".accordion-inner .progress");
            if (element.length) {
                var text = gettext("Current Height");
                var tooltip = gettext("Might be inaccurate!");
                element.before(text + ": <strong title='" + tooltip + "' data-bind='text: heightString'></strong><br>");
            }
        };
    }

    // view model class, parameters for constructor, container to bind to
    ADDITIONAL_VIEWMODELS.push([DisplayZViewModel, [], []]);
});
