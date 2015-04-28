    $(function() {
        $('#cons').change(function(){
            $('.masque').hide();
            $('.masque2').hide();
            $('.masque3').hide();
            $('#' + $(this).val()).show();
        });
    });

    $(function() {
        $('#Dassault').change(function(){
            $('.masque2').hide();
            $('.masque3').hide();
            $('#' + $(this).val()).show();
        });
    });

    $(function() {
        $('#Airbus').change(function(){
            $('.masque2').hide();
            $('.masque3').hide();
            $('#' + $(this).val()).show();
        });
    });

    $(function() {
        $('#jetv9').change(function(){
            $('.masque3').hide();
            $('#' + $(this).val()).show();
        });
    });

    $('#cons').append(new Option("valeur","texte"));
