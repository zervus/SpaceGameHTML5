var FirstGame = cc.Layer.extend(
{
	_ship:0,
    init:function(){
		this.setKeyboardEnabled(true);
        this.addChild(this.makeLayer());
		this.scheduleUpdate();
        return true;
    },
	makeLayer:function(){
		var layer1 = cc.LayerColor.create(
            new cc.Color4B(128, 128, 128, 255), 600, 600);

        layer1.setPosition(new cc.Point(0.0,0.0));
		layer1.addChild(this.makeBackground());
		layer1.addChild(this.makeShip());
		return layer1;
	},
	makeBackground:function(){
        var background = cc.Sprite.create(s_background);
		background.setPosition( cc.PointMake(300,300));
		return background;

	},
	makeShip:function(){
		this._ship = new ShipSprite();
		this._ship.scheduleUpdate();
		return this._ship;
	},
	onKeyUp:function(key){
		this._ship.onKeyUp(key);
	},
	onKeyDown:function(key){
		this._ship.onKeyDown(key);
	},
	update:function(dt){
		var shotsToAdd = this._ship._shots;
		for(var idx = 0; idx < shotsToAdd.length; ++idx){
			console.log("Adding shot to layer");
			var shot = shotsToAdd[idx];
			shot.scheduleUpdate();
			this.addChild(shot);

		}
		this._ship._shots = [];
	}
});


FirstGameScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new FirstGame();
        layer.init();
        this.addChild(layer);
    }
})
