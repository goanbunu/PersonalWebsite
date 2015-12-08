
                    // 'images/thumbs/accounts_resume_thumb.png',
                    // 'images/thumbs/accounts_resume_thumb.png',
                    // 'images/thumbs/accounts_resume_thumb.png',
                    // 'images/thumbs/accounts_resume_thumb.png',
                    // 'images/thumbs/accounts_resume_thumb.png',
                    // 'images/thumbs/accounts_resume_thumb.png',
$(function(){
    var viewportHeight = $(window).height();
    $("#portfolio").elastic_grid({
        'expandingHeight' : viewportHeight,
        'items' :
        [
            {
                'title'         : 'Simply Hired Accounts Pages',
                'description'   : '<ul><li>Simply Hired user accounts allow people to upload/edit their resume, save/apply to jobs, and more.</li> \
                <li>Content is responsive and dynamically rendered to ensure a positive UX.</li><li>Built with Backbone.js, Handlebars, Sass, and Django REST Framework.</li></ul>',
                'thumbnail'     : [
                    'images/screenshots/accounts_savedjobs.png',
                    'images/screenshots/accounts_noresume.png',
                    'images/screenshots/accounts_resumeupload.png',
                    'images/screenshots/accounts_resume.png',
                    'images/screenshots/accounts_editresume.png',
                    'images/screenshots/accounts_resumemobile.png',
                    'images/screenshots/accounts_savedjobsmobile.png',
                    'images/screenshots/accounts_mobilemenu.png'
                ],
                'large'         : [
                    'images/screenshots/accounts_savedjobs.png',
                    'images/screenshots/accounts_noresume.png',
                    'images/screenshots/accounts_resumeupload.png',
                    'images/screenshots/accounts_resume.png',
                    'images/screenshots/accounts_editresume.png',
                    'images/screenshots/accounts_resumemobile.png',
                    'images/screenshots/accounts_savedjobsmobile.png',
                    'images/screenshots/accounts_mobilemenu.png'
                ],
                'button_list'   : [],
                'tags'          : []
            },
            {
                'title'         : 'Face-enhancing app using OpenCV',
                'description'   : '<ul><li>DecorateIt is an image decorating application that uses OpenCV to automatically enhance eyes and smooth faces. Users can either take a photo with their webcam or upload a photo from disk. The system detects eyes using the Viola-Jones algorithm, and then increases them 20%, and pastes them back on the face. A bilateral filter is then used to smooth the entire face while perserving edges.</li> \
                <li>Built with OpenCV, JavaScript, HTML5 Canvas, Python, and Flask</li></ul>',
                'thumbnail'     : [
                    'images/screenshots/opencv_thumb.png',
                    'images/screenshots/opencv_animated.gif',
                    'images/screenshots/opencv_decoratinginterface.png',
                    'images/screenshots/opencv_pens.png',
                    'images/screenshots/opencv_stamps.png',
                    'images/screenshots/opencv_homepage.png',
                ],
                'large'         : [
                    'images/screenshots/opencv_process.png',
                    'images/screenshots/opencv_animated.gif',
                    'images/screenshots/opencv_decoratinginterface.png',
                    'images/screenshots/opencv_pens.png',
                    'images/screenshots/opencv_stamps.png',
                    'images/screenshots/opencv_homepage.png',
                ],
                'button_list'   :
                [
                    { 'title':'Download', 'url':'https://github.com/larissam/DecorateIt'}
                ],
                'tags'          : []
            },
            {
                'title'         : 'Stanford Eateries Map',
                'description'   : '<ul> \
                <li>Stanford Eateries is on the Stanford Visitor Information site. It uses the Google Maps API to load customized information about places to eat on campus</li> \
                  <li>Users can either click on the map directly or click an eatery name from the menu on the right</li> \
                  <li>Built with JavaScript, HTML, CSS, and Photoshop</li></ul>',
                'thumbnail'     : [
                    'images/screenshots/diningmap_unselected.png',
                    'images/screenshots/diningmap_selected.png',
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
                'description'   : '<ul><li>Personal project to integrate front-end unit testing into a JavaScript-heavy application.</li> \
                  <li>Carousel allows users to cycle through images by next/previous buttons or companion gallery. Sample images are included with a sample RESTful API powered by Django REST Framework</li> \
                  <li>Users can use Karma to automate running a suite of front end unit tests powered by Jasmine</li> \
                  <li>Built with Backbone.js, Handlebars, Sass, Jasmine, Karma, Django, and Django REST Framework.</li></ul>',
                'thumbnail'     : [
                    'images/screenshots/carousel_image1.png',
                    'images/screenshots/carousel_image2.png',
                    'images/screenshots/carousel_image3.png',
                    'images/screenshots/carousel_image4.png',
                    'images/screenshots/carousel_image5.png',
                    'images/screenshots/carousel_image6.png'
                ],
                'large'         : [
                    'images/screenshots/carousel_image1.png',
                    'images/screenshots/carousel_image2.png',
                    'images/screenshots/carousel_image3.png',
                    'images/screenshots/carousel_image4.png',
                    'images/screenshots/carousel_image5.png',
                    'images/screenshots/carousel_image6.png'
                ],
                'button_list'   :
                [
                    { 'title':'Download', 'url':'https://github.com/larissam/Carousel-Backbone-Jasmine'}
                ],
                'tags'          : []
            }

        ]
    });
});
