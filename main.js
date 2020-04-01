
onclick            /* -------------------------------------------------------------
                                      bootstrapTabControl
                                  ------------------------------------------------------------- */
function bootstrapTabControl() {
    var i, items = $('.nav-link'), pane = $('.tab-pane');
    // next
    $('.nexttab').on('click', function () {
        for (i = 0; i < items.length; i++) {
            if ($(items[i]).hasClass('active') == true) {
                break;
            }
        }
        if (i < items.length - 1) {
            // for tab
            $(items[i]).removeClass('active');
            $(items[i + 1]).addClass('active');
            // for pane
            $(pane[i]).removeClass('show active');
            $(pane[i + 1]).addClass('show active');
        }

    });
    // Prev
    $('.prevtab').on('click', function () {
        for (i = 0; i < items.length; i++) {
            if ($(items[i]).hasClass('active') == true) {
                break;
            }
        }
        if (i != 0) {
            // for tab
            $(items[i]).removeClass('active');
            $(items[i - 1]).addClass('active');
            // for pane
            $(pane[i]).removeClass('show active');
            $(pane[i - 1]).addClass('show active');
        }
    });
}
bootstrapTabControl();

var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    switch (clicks) {
        case 0:
        case 1:
        case 2:
            document.getElementById("holder").innerHTML = 'LOW.';
            document.getElementById("holder").style.color = '#90ee90';
            document.getElementById("resulthold").innerHTML = 'You may be stressed,get some rest.';
            // code block
            break;
        case 3:
        case 4:
        case 5:
            document.getElementById("holder").innerHTML = 'MEDIUM.';
            document.getElementById("holder").style.color = '#ffbf00';
            document.getElementById("resulthold").innerHTML = 'Drink water regularly and observe personal good hygiene.<br />Pay attention to your health and redo test after two days.';
            // code block
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            document.getElementById("holder").innerHTML = 'HIGH.';
            document.getElementById("holder").style.color = '#ff5500';
            document.getElementById("resulthold").innerHTML = 'Please see a doctor immediately.Do not panic,<br />isolate yourself from friends and family.';

            // code block
            break;
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            document.getElementById("holder").innerHTML = 'SEVERE.';
            document.getElementById("holder").style.color = '#FF0000';
            document.getElementById("resulthold").innerHTML = 'Do not panic,isolate yourself from friends and family.<br />Call 0800-9700-0010,SMS: 08099555577 or<br /> WHATSAPP:07087110839';

            // code block
            break;
        default:
            // code block
            document.getElementById("holder").innerHTML = 'HELLO.';
    }
};
function onClickdouble() {
    clicks += 2;
    document.getElementById("clicks").innerHTML = clicks;
    switch (clicks) {
        case 0:
        case 1:
        case 2:
            document.getElementById("holder").innerHTML = 'LOW.';
            document.getElementById("holder").style.color = '#90ee90';
            document.getElementById("resulthold").innerHTML = 'You may be stressed,get some rest.';
            // code block
            break;
        case 3:
        case 4:
        case 5:
            document.getElementById("holder").innerHTML = 'MEDIUM.';
            document.getElementById("holder").style.color = '#ffbf00';
            document.getElementById("resulthold").innerHTML = 'Drink water regularly and observe personal good hygiene.<br />Pay attention to your health and redo test after two days.';
            // code block
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            document.getElementById("holder").innerHTML = 'HIGH.';
            document.getElementById("holder").style.color = '#ff5500';
            document.getElementById("resulthold").innerHTML = 'Please see a doctor immediately.Do not panic,<br />isolate yourself from friends and family.';

            // code block
            break;
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            document.getElementById("holder").innerHTML = 'SEVERE.';
            document.getElementById("holder").style.color = '#FF0000';
            document.getElementById("resulthold").innerHTML = 'Do not panic,isolate yourself from friends and family.<br />Call 0800-9700-0010,SMS: 08099555577 or<br /> WHATSAPP:07087110839';

            // code block
            break;
        default:
            // code block
            document.getElementById("holder").innerHTML = 'HELLO.';
    }
};
function onClicktriple() {
    clicks += 3;
    document.getElementById("clicks").innerHTML = clicks;
    switch (clicks) {
        case 0:
        case 1:
        case 2:
            document.getElementById("holder").innerHTML = 'LOW.';
            document.getElementById("holder").style.color = '#90ee90';
            document.getElementById("resulthold").innerHTML = 'You may be stressed,get some rest.';
            // code block
            break;
        case 3:
        case 4:
        case 5:
            document.getElementById("holder").innerHTML = 'MEDIUM.';
            document.getElementById("holder").style.color = '#ffbf00';
            document.getElementById("resulthold").innerHTML = 'Drink water regularly and observe personal good hygiene.<br />Pay attention to your health and redo test after two days.';
            // code block
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            document.getElementById("holder").innerHTML = 'HIGH.';
            document.getElementById("holder").style.color = '#ff5500';
            document.getElementById("resulthold").innerHTML = 'Please see a doctor immediately.Do not panic,<br />isolate yourself from friends and family.';

            // code block
            break;
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            document.getElementById("holder").innerHTML = 'SEVERE.';
            document.getElementById("holder").style.color = '#FF0000';
            document.getElementById("resulthold").innerHTML = 'Do not panic,isolate yourself from friends and family.<br />Call 0800-9700-0010,SMS: 08099555577 or<br /> WHATSAPP:07087110839';

            // code block
            break;
        default:
            // code block
            document.getElementById("holder").innerHTML = 'HELLO.';
    }
};

function noClick() {
    clicks += 0;
    document.getElementById("clicks").innerHTML = clicks;
    switch (clicks) {
        case 0:
        case 1:
        case 2:
            document.getElementById("holder").innerHTML = 'LOW.';
            document.getElementById("holder").style.color = '#90ee90';
            document.getElementById("resulthold").innerHTML = 'You may be stressed,get some rest.';
            // code block
            break;
        case 3:
        case 4:
        case 5:
            document.getElementById("holder").innerHTML = 'MEDIUM.';
            document.getElementById("holder").style.color = '#ffbf00';
            document.getElementById("resulthold").innerHTML = 'Drink water regularly and observe personal good hygiene.<br />Pay attention to your health and redo test after two days.';
            // code block
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            document.getElementById("holder").innerHTML = 'HIGH.';
            document.getElementById("holder").style.color = '#ff5500';
            document.getElementById("resulthold").innerHTML = 'Please see a doctor immediately.Do not panic,<br />isolate yourself from friends and family.';

            // code block
            break;
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            document.getElementById("holder").innerHTML = 'SEVERE.';
            document.getElementById("holder").style.color = '#FF0000';
            document.getElementById("resulthold").innerHTML = 'Do not panic,isolate yourself from friends and family.<br />Call 0800-9700-0010,SMS: 08099555577 or<br /> WHATSAPP: 07087110839';

            // code block
            break;
        default:
            // code block
            document.getElementById("holder").innerHTML = 'HELLO.';
    }
};