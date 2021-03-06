var lightshare = function() { };

lightshare.init = function() {
	if(!this.instance) {		
		this.instance = new lightshare();
		
		var self = this.instance;
		
		self.isOpen = false;
		
		$('body').prepend(
			'<style>'+
			'#lightshare { width:205px; height:66px; font-family: Tahoma, sans-serif; font-size: 13px; color:#999; position:absolute;top:-100px;border-radius:6px;padding:3px;background:#fff; border: 1px solid #e0e0e0;-webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1); -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1); box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);}'+
			'#lightshare .title, #lightshare .service { padding: 3px; display:inline; float: left; vertical-align: top; height: 20px; }'+
			'#lightshare .row { display: block; clear: both; height: 26px; padding: 3px; }'+
			'#lightshare-twitter { cursor:pointer; display:block; position: relative; height: 18px; width: 56px; font-weight: bold; color: #333; text-decoration: none; text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5); white-space: nowrap; vertical-align: top; background-color: white; background-image: -moz-linear-gradient(top, #ffffff, #dedede); background-image: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#dedede)); background-image: -ms-linear-gradient(top, #ffffff, #dedede); background-image: linear-gradient(top, #ffffff, #dedede); background-image: -o-linear-gradient(top, #ffffff, #dedede); border: #CCC solid 1px; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; outline: none; filter: progid:dximagetransform.microsoft.gradient(startColorstr="#ffffff", endColorstr="#dedede"); }'+
			'#lightshare-twitter span { display: inline-block; padding: 0 3px 0 19px; zoom: 1; font: normal normal normal 11px/1.7 "Helvetica Neue", Arial, sans-serif; font-weight:bold; }'+
			'#lightshare-twitter i { position: absolute; top: 1px; left: 1px; width: 16px; height: 16px; background: transparent url(data:image/gif;base64,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) 0 0 no-repeat; }'+
			'#lightshare-facebook { border:none; overflow:hidden; width:100px; height:20px; }'+
			'#lightshare-gplus { cursor:pointer; overflow:hidden; width:20px; height:20px; background: url(http://www.gstatic.com/images/icons/gplus-16.png) 50% 50% no-repeat; text-indent: -100px; overflow: hidden; }'+
			
			'</style>'
		);	
		$('body').append(
			'<div id="lightshare">'+
			'	<div class="row">'+
			'		<div class="title">Share</div>'+
			'	</div>'+
			'	<div class="row">'+
			'		<div class="service"><div id="lightshare-twitter" title="Share on Twitter"><i></i><span>Tweet</span></div></div>'+
			'		<div class="service"><div id="lightshare-gplus" title="Share on Google+">G+</div></div>'+
			'		<div class="service"><iframe id="lightshare-facebook" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div>'+
			'	</div>'+
			'</div>'
		);
		self.lightshareDO = $('#lightshare');
		self.facebook = $('#lightshare-facebook');
		self.twitter = $('#lightshare-twitter');
		self.gplus = $('#lightshare-gplus');
		
		self.width = self.lightshareDO.width();
		self.height = self.lightshareDO.height();
				
		self.lightshareDO.bind('mouseleave',function(e) {
			//self.closeHandler();
		});
				
		$('.lightshare').each(function(i){
			var obj = this;
			$(obj).bind('mouseenter',function(e) {
				self.openHandler(obj);
			});
			$(obj).bind('click',function(e) {
				e.preventDefault();
				e.stopPropagation();
			});
		});
	}
	return this.instance;
};

lightshare.prototype.openHandler = function(obj) {
	var self = this;
	if(self.lastObj != obj) {			
		var url = $(obj).attr('data-url') || "";
		var copy = $(obj).attr('data-copy') || "";
		var via = $(obj).attr('data-via') || "";
				
	 	self.lastObj = obj;
	
		self.twitter.unbind();
		self.twitter.bind('click',function(e) {
			e.preventDefault();
			e.stopPropagation();
			var tweetUrl = "https://twitter.com/intent/tweet?source=lightshare";
			if(copy.length > 0) { tweetUrl += "&text="+encodeURIComponent(copy); }
			if(url.length > 0) { tweetUrl += "&url="+encodeURIComponent(url); }
			if(via.length > 0) { tweetUrl += "&via="+encodeURIComponent(via); }
			window.open(tweetUrl,"_blank","status=0,toolbar=0,location=1,menubar=0,directories=0,resizable=0,scrollbars=0,height=240,width=640");
		});
		self.gplus.bind('click',function(e) {
			e.preventDefault();
			e.stopPropagation();
			var gplusUrl = "https://plus.google.com/share?source=lightshare";
			if(url.length > 0) { gplusUrl += "&url="+encodeURIComponent(url); }
			window.open(gplusUrl,"_blank","status=0,toolbar=0,location=1,menubar=0,directories=0,resizable=0,scrollbars=0,height=240,width=640");
		});			
		var likeUrl = "https://www.facebook.com/plugins/like.php?href="+url+"&send=false&layout=button_count&width=100&show_faces=false&action=like&colorscheme=light&height=21&appId=258645120881596";
		self.facebook.css({'display':'none'});
		self.facebook.bind('load',function() {
			self.facebook.css({'display':'inline'});
		});
		self.facebook.attr('src',likeUrl);
	}
	if(self.isOpen == false) {
		self.isOpen = true;
		
		var offset = $(obj).offset();
		
		if($(self.lightshareDO).outerWidth()+offset['left'] > $(window).scrollLeft() + $(window).width()) { offset['left'] = $(window).scrollLeft() + $(window).width() -$(self.lightshareDO).outerWidth(); }
		if($(self.lightshareDO).outerHeight()+offset['top'] > $(window).scrollTop() + $(window).height()) { offset['top'] = $(window).scrollTop() + $(window).height() -$(self.lightshareDO).outerHeight(); }
		if(offset['left'] < $(window).scrollLeft()) { offset['left'] = $(window).scrollLeft(); }
		if(offset['top'] < $(window).scrollTop()) { offset['top'] = $(window).scrollTop(); }
		
		
		self.lightshareDO.css({'left':offset['left'],'top':offset['top']});
	}	
};

lightshare.prototype.closeHandler = function() {
	var self = this;
	self.isOpen = false;
	self.lightshareDO.stop().css({'top':-100});	
};

$(function() {
	lightshare.init();
});
