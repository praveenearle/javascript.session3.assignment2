function hideoddrows() {
    var rows = document.getElementById('ganguly').getElementsByTagName('tr');
    for (var x = 1; x <= rows.length; x++) {
        if (x % 2 == 0) {

        } else {
            document.getElementById('tr'+x).setAttribute('style','display:none');


        }



    }
}