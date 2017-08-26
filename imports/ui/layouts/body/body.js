import './body.html';
import './head-bar/head-bar.js';
import './side-bar/side-bar.js';
import './index.js';

BlazeLayout.setRoot('body');
let i;
Template.App_body.onCreated(() => {
    i = 0;
    $('body').addClass('theme-blue');
    /*$('.barss').on('click', function () {

        //if ($('body').hasClass('overlay-open')) { $('.overlay').fadeIn(); } else {$('.overlay').fadeOut(); }
    });*/
});

Template.App_body.onRendered(() => {
    $('body').removeClass('ls-closed');
});

Template.App_body.events({
    'click .barss'() {
        console.log('hellooooo');
        if (i == 0) {
            $('body').addClass('overlay-open');
            i = 1;
        } else {
            $('body').removeClass('overlay-open');
            i = 0;
        }
    }
});
