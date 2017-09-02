$(document).ready(function () {
    var $form = $('form');
    var formData = {};
    $('#message').hide();
    $form.find('textarea').focus(function () {
        $(this).parent().removeClass('form-error');
    });
    $form.find('button').click(function (event) {
        event.preventDefault();
        console.log($form.find(':checkbox').attr('type'));
        var hobbiesArr = [];
        var errorCount = 0;
        var email = $form.find('input[type=email]').val();
        // var email = $form.find('#email').val();
        // below is the native javascript way
        // document.getElementsByTagName('form').querySelector('input[type=email]').value;
        var password = $form.find('input:password').val();
        var address = $form.find('textarea').val();
        var gender = $form.find('input[name=gender]').val();
        var $hobbies = $form.find('input[type=checkbox]:checked');
        $hobbies.each(function (index, item) {
            hobbiesArr.push($(this).val());
        });

        if (address.length < 30) {
            // $form.find('textarea').parent().addClass('form-error');
            $form.find('textarea').parent().attr('class', 'form-group form-error');
            errorCount++;
        }

        if (errorCount) {
            $("#message").html("please enter the correct values");
            $('#message').show();
        } else {
            formData = {
                email: email,
                password: password,
                address: address,
                gender: gender,
                hobbies: hobbiesArr
            };
            console.log("Success validation", formData);
        }
    });
});
