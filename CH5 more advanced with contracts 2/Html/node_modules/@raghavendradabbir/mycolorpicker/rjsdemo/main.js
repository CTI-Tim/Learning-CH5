requirejs(['../dist/mycolorpicker'], function(mycolorpicker) {
    var val = document.getElementById('rgbValue');

    mycolorpicker.rgb('rgbPicker').on('change', function(c) {
        val.innerHTML = c.css();
    });
});
