// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;( function( $, window, document, undefined ) {

	"use strict";

		// undefined is used here as the undefined global variable in ECMAScript 3 is
		// mutable (ie. it can be changed by someone else). undefined isn't really being
		// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
		// can no longer be modified.

		// window and document are passed through as local variables rather than global
		// as this (slightly) quickens the resolution process and can be more efficiently
		// minified (especially when both are regularly referenced in your plugin).

		// Create the defaults once
		var pluginName = "chris_carousel",
		defaults = {
			rotationSpeed:1000,
			screenTime:1000
		};

		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = element;

			// jQuery has an extend method which merges the contents of two or
			// more objects, storing the result in the first object. The first object
			// is generally empty as we don't want to alter the default options for
			// future instances of the plugin
			this.settings = $.extend(defaults,{}, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend( Plugin.prototype, {
			init: function() {

				// Place initialization logic here
				// You already have access to the DOM element and
				// the options via the instance, e.g. this.element
				// and this.settings
				// you can add more functions like the one below and
				// call them like the example below
				this.my_carousel( );
			},
			my_carousel: function( ) {

				// some logic
				 // Set the interval to be 5 seconds 

				 var y = $(window).width();
				 $(document).ready(function(){
				// Set the interval to be 5 seconds
				var t = setInterval(function(){
					$("#my_carousel ul").animate({marginLeft:-y },defaults.rotationSpeed,function(){
						$(this).find(".picture_slide:last").after($(this).find(".picture_slide:first"));
						$(this).css({marginLeft:0});
					})
				},defaults.screenTime);
			});

				//css jquery function to make sure pictures are screen width
				$(document).ready(function(){
					$(".picture_slide").css({"width":y, "float":"left", "height":"600px", "list-style":"none"});
					$(".slider").css({"width": y*3, "padding":"0", "margin":"0"});
				});
			}
		} );

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function( options ) {
			return this.each( function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" +
						pluginName, new Plugin( this, options ) );
				}
			} );
		};

	} )( jQuery, window, document );
