$(function(){
    var viewportHeight = $(window).height();
    $("#portfolio").elastic_grid({
        'expandingHeight' : viewportHeight,
        'items' :
        [
            {
                'title'         : 'Simply Hired Accounts Pages',
                'description'   : '<ul><li>Simply Hired user accounts allow people to upload/edit their resume, save/apply to jobs, and more.</li><li>Content is responsive and dynamically rendered to ensure a positive UX.</li><li>Built with Backbone.js, Handlebars, Sass, and Django REST Framework.</li><li>Promoted 2 levels to software engineer because of successful leadership of the front end development of the user accounts pages.</li></ul>',
                'thumbnail'     : [
                    'images/thumbs/1.jpg',
                    'images/thumbs/2.jpg',
                    'images/thumbs/3.jpg',
                    'images/thumbs/4.jpg',
                    'images/thumbs/5.jpg',
                    'images/thumbs/6.jpg'
                ],
                'large'         : [
                    'images/screenshots/accounts_resume.png',
                    'images/screenshots/accounts_editresume.png',
                    'images/screenshots/accounts_resumeupload.png',
                    'images/screenshots/accounts_savedjobs.png',
                    'images/screenshots/accounts_resumemobile.png',
                    'images/screenshots/accounts_mobilemenu.png'
                ],
                'button_list'   : [],
                'tags'          : []
            },
            {
                'title'         : 'Face-enhancing app using OpenCV',
                'description'   : 'Description text here',
                'thumbnail'     : [
                    'images/thumbs/1.jpg',
                    'images/thumbs/2.jpg',
                    'images/thumbs/3.jpg',
                    'images/thumbs/4.jpg',
                    'images/thumbs/5.jpg',
                    'images/thumbs/6.jpg'
                ],
                'large'         : [
                    'images/screenshots/accounts_resume.png',
                    'images/screenshots/accounts_editresume.png',
                    'images/screenshots/accounts_resumeupload.png',
                    'images/screenshots/accounts_savedjobs.png',
                    'images/screenshots/accounts_resumemobile.png',
                    'images/screenshots/accounts_mobilemenu.png'
                ],
                'button_list'   :
                [
                    { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
                ],
                'tags'          : []
            },
            {
                'title'         : 'Stanford Eateries Map',
                'description'   : 'Description text here',
                'thumbnail'     : [
                    'images/thumbs/1.jpg',
                    'images/thumbs/2.jpg',
                ],
                'large'         : [
                    'images/screenshots/diningmap_unselected.png',
                    'images/screenshots/diningmap_selected.png',
                ],
                'button_list'   : [],
                'tags'          : []
            },
            {
                'title'         : 'Backbone.js Carousel + Jasmine Tests',
                'description'   : '<ul><li>Personal project to integrate front-end unit tests using Jasmine into a Backbone.js project.</li><li>Built with Backbone.js, Handlebars, Sass, Jasmine, Karma, and Django REST Framework.</li></ul>',
                'thumbnail'     : [
                    'images/thumbs/1.jpg',
                    'images/thumbs/2.jpg',
                    'images/thumbs/3.jpg',
                    'images/thumbs/4.jpg',
                    'images/thumbs/5.jpg',
                    'images/thumbs/6.jpg'
                ],
                'large'         : [
                    'images/screenshots/accounts_resume.png',
                    'images/screenshots/accounts_editresume.png',
                    'images/screenshots/accounts_resumeupload.png',
                    'images/screenshots/accounts_savedjobs.png',
                    'images/screenshots/accounts_resumemobile.png',
                    'images/screenshots/accounts_mobilemenu.png'
                ],
                'button_list'   :
                [
                    { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
                ],
                'tags'          : []
            }

        ]
    });
});
