var ShotSprite = cc.Sprite.extend({
	_added:false,
	_yMax:0,
	ctor:function(){
		this.initWithFile(s_shot);
		this.setRotation(180);
		this.setPosition(new cc.Point(0,i_shotStartY));
		var winsize = cc.Director.getInstance().getWinSize();
		this._yMax = winsize.height;
	},
	update:function(dt){
		var yPos = this.getPositionY();
		this.setPositionY(yPos+i_shotSpeed);
		if(yPos > this._yMax){
			this.removeFromParent(true);
		}
	}
});
