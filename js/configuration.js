
                    // 'images/thumbs/accounts_resume_thumb.png',
                    // 'images/thumbs/accounts_resume_thumb.png',
                    // 'images/thumbs/accounts_resume_thumb.png',
                    // 'images/thumbs/accounts_resume_thumb.png',
                    // 'images/thumbs/accounts_resume_thumb.png',
                    // 'images/thumbs/accounts_resume_thumb.png',
$(function(){
    var viewportHeight = $(window).height();
    $( window ).resize(function() {
        viewportHeight = $(window).height();
    });
    $("#portfolio").elastic_grid({
        'expandingHeight' : viewportHeight,
        'items' :
        [
            {
                'title'         : 'Simply Hired Accounts Pages',
                'description'   : '<ul><li>Simply Hired user accounts allow people to upload/edit their resume, save/apply to jobs, manage saved searches, and sign up for email alerts.</li> \
                <li>Content is responsive and dynamically rendered to ensure a positive UX.</li><li>Built with Backbone.js, Handlebars, Sass, and Django REST Framework.</li></ul>',
                'thumbnail'     : [
                    'images/thumbs/accounts_savedjobs.png',
                    'images/thumbs/accounts_noresume.png',
                    'images/thumbs/accounts_resumeupload.png',
                    'images/thumbs/accounts_resume.png',
                    'images/thumbs/accounts_editresume.png',
                    'images/thumbs/accounts_resumemobile.png',
                    'images/thumbs/accounts_savedjobsmobile.png',
                    'images/thumbs/accounts_mobilemenu.png'
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
                'description'   : '<ul> \
                    <li>The system detects eyes using the Viola-Jones algorithm, scales them 20%, and pastes them back on the face. A transparency mask around the edges of the scaled eyes ensures they are less detectable when pasted back on. A bilateral filter is then used to smooth the entire face while perserving edges.</li> \
                    <li>The decoration part of the app is built with JavaScript and HTML5 Canvas. The app detects the cursor position to position selected graphics on the image. When a user is done, they can download, save, or email the image.</li> \
                <li>Built with OpenCV, JavaScript, HTML5 Canvas, Python, and Flask</li></ul>',
                'thumbnail'     : [
                    'images/thumbs/opencv_thumb.png',
                    'images/thumbs/opencv_animated.gif',
                    'images/thumbs/opencv_decoratinginterface.png',
                    'images/thumbs/opencv_pens.png',
                    'images/thumbs/opencv_stamps.png',
                    'images/thumbs/opencv_homepage.png',
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
                    { 'title':'View Source', 'url':'https://github.com/larissam/DecorateIt'}
                ],
                'tags'          : []
            },
            {
                'title'         : 'Stanford Eateries Map',
                'description'   : '<ul> \
                <li>On the Stanford Visitor Information site. Uses the Google Maps API to load customized information about places to eat on campus.</li> \
                  <li>Users can either click on the map directly or click an eatery name from the menu on the right.</li> \
                  <li>Built with JavaScript, HTML, CSS, and Photoshop</li></ul>',
                'thumbnail'     : [
                    'images/thumbs/diningmap_unselected.png',
                    'images/thumbs/diningmap_selected.png',
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
                    'images/thumbs/carousel_image1.png',
                    'images/thumbs/carousel_image2.png',
                    'images/thumbs/carousel_image3.png',
                    'images/thumbs/carousel_image4.png',
                    'images/thumbs/carousel_image5.png',
                    'images/thumbs/carousel_image6.png'
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
                    { 'title':'View Source', 'url':'https://github.com/larissam/Carousel-Backbone-Jasmine'}
                ],
                'tags'          : []
            }

        ]
    });
});
