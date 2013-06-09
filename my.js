var UILayout = function(){
	
	function _anchor_verticalhandler()
	{
		var leftwidth = $("#leftcontent").width();
		var rightwidth = $("#rightcontent").width();
		var handlerleft = $("#handler_vertical").offset().left;
		$("#leftcontent").css("width", handlerleft - 4);
		
		var offsetleft =  handlerleft - 4 - leftwidth;
		$("#rightcontent").css("width", rightwidth - offsetleft)
			.css("left", handlerleft + 8);
	}

	function _window_resize_handler()
	{
		var winHeight = this.innerHeight;
		var mainboxWidth = parseInt($("#mainbox").css("width"));

		// update the div size.
		$("#mainbox").css("height", winHeight-130);	
		$("#leftcontent").css("width", mainboxWidth/2 - 4);

		var innerdivheight = $("#leftcontent").height();
		var innerdivwidth = $("#leftcontent")[0].offsetWidth;
		var rightcontentleft = innerdivwidth;
		$("#handler_vertical").css("height", innerdivheight).css("left", rightcontentleft);
		$("#rightcontent").css("width", mainboxWidth - rightcontentleft - 12)
			.css("height", innerdivheight)
			.css("left", rightcontentleft+8);
	}	

	function Initialize()
	{
		// initialize the layout.
		_window_resize_handler();

		// register the window resize event.
		$(window).resize(function(arg){
			_window_resize_handler();
		});

		// register the handler the move handler.
		$("#handler_vertical").draggable({
			axis:"x",
			drag: function(arg) {
				_anchor_verticalhandler();
			},
			stop: function(arg) {
				_anchor_verticalhandler();
			}
		});
	}

	return {
		Initialize : function() {
			Initialize();
		}
	};
}();