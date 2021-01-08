/* jquery-3.5.1.js does NOT support Arrow Functions */

$(document).ready(function() {

    /* 
    Scrolled Based Sticky Navigation
    Using WayPoint - 
    
    <!-- WayPoint Plugin for jQuery -->
    <script type="text/javascript" src="vendors/js/jquery.waypoints.min.js"></script>
    
    http://imakewebthings.com/waypoints/
    */
    var waypoints = $('#jq--main-nav').waypoint(function (direction) {
   
        if(direction == 'down'){
            $('#jq--main-nav').addClass('sticky');
        }else {
            $('#jq--main-nav').removeClass('sticky');
        }   
    }, {
        offset: '-90%'
    })
    
    
    /* Scroll on Buttons */
    $('.jq--scroll-to-plans').click(function() {
        
        $('html, body').animate({scrollTop: $('.jq--section-plans').offset().top}, 2000);
        
    });
    
    $('.jq-scroll-to-features').click(function() {
        
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
        
    });
    
    
    // Menu Navigation  
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
          
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
          
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            
            if (target.length) {
                
                var urlSegment = target[0].id;
                
                $('html,body').animate({scrollTop: target.offset().top}, 1000, 
                    // After end of animation
                    function(){
                        window.location.hash = urlSegment;
                    });
                return false;
            }
        }
      });
    });
    
    /* 
    Using WayPoint to remove url segment,
    which was added by Menu Navigation, when we scroll back to top.
    */
    /* NOT A Good Idea, Page will jup to top
    $('#jq--main-nav').waypoint(function (direction) {
   
        if(direction == 'up'){
            window.location.hash = '';
        }else {
            // Do nothing
        }
            
    }, {
        offset: '-90%'
    })
    */
    // All jQuery Code should be above it(inside input to 'ready()')
});