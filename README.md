# jquery-scrollspy

### This library is no longer actively supported or maintained.  
*For similar functionality checkout these other libraries:*
 * https://github.com/softwarespot/jquery-scrollspy (actively maintained fork)
 * http://janpaepke.github.io/ScrollMagic/
 * http://pixelcog.github.io/parallax.js/

--

An adaptation of the Mootools Scrollspy ( http://davidwalsh.name/mootools-scrollspy ) plugin for jQuery

(c) 2011 Samuel Alexander (sxalexander@gmail.com)

Released under The MIT License.

## Description:

scrollspy is a simple jQuery plugin for firing events based on where the user has scrolled to in a page.


## Homepage:

http://github.com/sxalexander/jquery-scrollspy

## Source:

Hosted at GitHub; browse at:

  http://github.com/sxalexander/jquery-scrollspy/tree/master

Or clone from:

    git://github.com/sxalexander/jquery-scrollspy.git

## Usage:

1. Insert the necessary elements in your document's `<head>` section, e.g.:
   
        <script type='text/javascript' src='/javascripts/jquery.scrollspy.js'></script>

 Remember to include jquery.scrollspy.js *after* including the main jQuery library.

2. Initialise scrollspy in your document.onload, e.g.:

        <script type='text/javascript'>
	        $(document).ready(function() {
        			$('#sticky-navigation').scrollspy({
    					min: $('#nav').offset().top,
    					onEnter: function(element, position) {
    						$("#nav").addClass('fixed');
    					},
    					onLeave: function(element, position) {
    						$("#nav").removeClass('fixed');
    					}
        			});
        		});
        </script>

Check out the /examples for more info !

## Documentation:

Options for ScrollSpy include:

    min: (defaults to 0) The minimum value of the X or Y coordinate, depending on mode.
    max: (defaults to 0) The maximum value of the X or Y coordinate, depending on mode.
    mode: (defaults to 'vertical') Defines whether to listen to X or Y scrolling.
    container: (defaults to window) The element whose scrolling to listen to.

Events for ScrollSpy include:

    scrollTick: Fires on each scroll event within the min and max parameters. Receives as parameters:
    
        position: an object with the current X and Y position.
        inside: a Boolean value for whether or not the user is within the min and max parameters
        enters: the number of times the min / max has been entered.
        leaves: the number of times the min / max has been left.
    
    scrollEnter: Fires every time the user enters the min / max zone.
            position: an object with the current X and Y position.
            enters: the number of times the min / max has been entered.
    
    scrollLeave: Fires every time the user leaves the min / max zone.
            position: an object with the current X and Y position.
            leaves: the number of times the min / max has been left.


## A note on forking:

By forking this project you hereby grant permission for any commits to your fork to be
merged back into this repository and, with attribution, be released under the terms of
the MIT License.

## Contributors

*  [jmocana2](https://github.com/jmocana2)
*  [clslrns](https://github.com/clslrns)
*  [allnightlong](https://github.com/allnightlong)
*  [shulard](https://github.com/shulard)
*  [martl](https://github.com/martl)
