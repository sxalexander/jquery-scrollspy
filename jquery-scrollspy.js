/*!
 * jQuery Scrollspy Plugin
 * Author: @sxalexander
 * Licensed under the MIT license
 */


;(function ( $, window, document, undefined ) {

    $.fn.extend({
      scrollspy: function ( options ) {
        
          var defaults = {
            min: 0,
            max: 0,
            mode: 'vertical',
            buffer: 0,
            container: window,
            onEnter: options.onEnter ? options.onEnter : [],
            onLeave: options.onLeave ? options.onLeave : [],
            onTick: options.onTick ? options.onTick : []
          }
          
          // Here's a 'best' approach for overriding 'defaults' with specified options. 
          // Note how rather than a regular defaults object being passed as the second
          // parameter, we instead refer to $.fn.pluginName.options explicitly, merging it
          // with the options passed directly to the plugin. This allows us to override
          // options both globally and on a per-call level. 

          var options = $.extend( {}, defaults, options );

          var init = function(){
            
          }
          
          var processScroll = function(){

            
          }
          
          return this.each(function (i) {

              var element = this;
              var o = options;
              var $container = $(o.container);
              var mode = o.mode;
              var buffer = o.buffer;
              var enters = leaves = 0;
              var max = parseInt(o.max);
              var inside = false;
              
              /* fix max */
              if(max == 0){
                max = (mode == 'vertical') ? $container.height() : $container.width();
              }
              
              /* add listener to container */
              $container.bind('scroll', function(e){
                  var position = {top: $(this).scrollTop(), left: $(this).scrollLeft()};
                  var xy = (mode == 'vertical') ? position.top + buffer : position.left + buffer;
                  /* if we have reached the minimum bound but are below the max ... */
                  if(xy >= o.min && xy <= max){
                    /* trigger enter event */
                    if(!inside){
                       inside = true;
                       enters++;
                       
                       /* fire enter event */
                       $(element).trigger('scrollEnter', {position: position})
                       if($.isFunction(o.onEnter)){
                         o.onEnter(element, position);
                       }
                      
                     }
                     
                     /* triger tick event */
                     $(element).trigger('scrollTick', {position: position, inside: inside, enters: enters, leaves: leaves})
                     if($.isFunction(o.onTick)){
                       o.onTick(element, position, inside, enters, leaves);
                     }
                  }else{
                    
                    if(inside){
                      inside = false;
                      leaves++;
                      $(element).trigger('scrollLeave', {position: position, leaves:leaves})
                      if($.isFunction(o.onLeave)){
                        o.onLeave(element, position);
                      }
                    }
                  }
              }); 

          });
      }

    })

    
})( jQuery, window );