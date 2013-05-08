var ShipSprite = cc.Sprite.extend({
	_currentRotation:-90,
	_keysDown:[],
	_xPos:0,
	_yPos:0,
	_xMax:300,
	_xMin:0,
	_fireDelay:0,
	_shots:[],
	_shooting:false,
	ctor:function(){
		this.initWithFile(s_ship);
		this.setRotation(this._currentRotation);
		
		var winsize = cc.Director.getInstance().getWinSize();
		this.setScale(.3);
		var shipSize = this.getBoundingBox();
		this._xMin = shipSize.width/2;
		this._xMax = winsize.width - shipSize.width/2;
		this._xPos = winsize.width/2;
		this._yPos = shipSize.height;
		this.setPosition( cc.PointMake(this._xPos, this._yPos));
	},
	update:function(dt){
		this.updatePosition();
		this.updateFire(dt);
	},
	updatePosition:function(){
		this._xPos += this.moveLeftRight()*5;
		if(this._xPos < this._xMin)
			this._xPos = this._xMin;
		if(this._xPos > this._xMax)
			this._xPos = this._xMax;
		this.setPosition(new cc.Point(this._xPos, this._yPos));	
	},
	updateFire:function(dt){
		this._fireDelay += dt;
		if(this.isShooting() && this._fireDelay > i_shotRepeat)
		{
			console.log("shoot "+this._xPos);
			var shotSprite = new ShotSprite();
			shotSprite.setPositionX(this._xPos);
			this._shots.push(shotSprite);
			this._fireDelay = 0;
		}
	},
	isShooting:function(){
		return this._shooting;	
		var idx = this._keysDown.indexOf(cc.KEY.up);
		return idx != -1;
	},
	onKeyUp:function(key){
		var idx = this._keysDown.indexOf(key);
		if(idx != -1){
			this._keysDown.splice(idx, 1);
			console.log("Removed key: " + key);
		}
		if(key === cc.KEY.up){
			this._fireDelay = 1;
			this._shooting=false;
		}
	},
	onKeyDown:function(key){
		if(this._keysDown.indexOf(key) === -1){
			this._keysDown.push(key);
			console.log("Adding key:" + key);
		}
		if(key === cc.KEY.up){
			this._shooting = true;
		}
	},
	moveLeftRight:function(){
		var leftIdx = this._keysDown.indexOf(cc.KEY.left);
		var rightIdx = this._keysDown.indexOf(cc.KEY.right);
		if(leftIdx === -1 && rightIdx === -1){
			dx = 0;
		}
		if(leftIdx > rightIdx)
			dx = -1;
		if(leftIdx < rightIdx)
			dx = 1;
		return dx;
	}
});
