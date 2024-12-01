
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// editabletilemap
		this.cache.tilemap.add("editabletilemap_c7d66947-190a-4c6e-8517-469e089d8734", {
			format: 1,
			data: {
				width: 15,
				height: 2,
				orientation: "orthogonal",
				tilewidth: 16,
				tileheight: 16,
				tilesets: [
					{
						columns: 24,
						margin: 0,
						spacing: 0,
						tilewidth: 16,
						tileheight: 16,
						tilecount: 288,
						firstgid: 1,
						image: "tilesets",
						name: "tilesets",
						imagewidth: 384,
						imageheight: 192,
					},
				],
				layers: [
					{
						type: "tilelayer",
						name: "groundLayer",
						width: 15,
						height: 2,
						opacity: 1,
						data: [153, 146, 160, 148, 149, 0, 0, 0, 0, 0, 159, 151, 159, 148, 149, 177, 170, 184, 172, 173, 27, 28, 29, 30, 31, 183, 175, 183, 172, 173],
					},
				],
			},
		});
		const editabletilemap = this.add.tilemap("editabletilemap_c7d66947-190a-4c6e-8517-469e089d8734");
		editabletilemap.addTilesetImage("tilesets");

		// levelLayer
		const levelLayer = this.add.layer();

		// backgroundTileSprite
		const backgroundTileSprite = this.add.tileSprite(0, 0, 240, 176, "background");
		backgroundTileSprite.setOrigin(0, 0);
		levelLayer.add(backgroundTileSprite);

		// foregroundTileSprite
		const foregroundTileSprite = this.add.tileSprite(0, 0, 240, 176, "middleground-no-fungus");
		foregroundTileSprite.setOrigin(0, 0);
		levelLayer.add(foregroundTileSprite);

		// rightWallTileSprite
		const rightWallTileSprite = this.add.tileSprite(224, 0, 16, 176, "tilesets", 229);
		rightWallTileSprite.setOrigin(0, 0);
		levelLayer.add(rightWallTileSprite);

		// leftWallTileSprite
		const leftWallTileSprite = this.add.tileSprite(0, 0, 16, 176, "tilesets", 232);
		leftWallTileSprite.setOrigin(0, 0);
		levelLayer.add(leftWallTileSprite);

		// groundLayer
		editabletilemap.createLayer("groundLayer", ["tilesets"], 0, 144);

		// playerLayer
		const playerLayer = this.add.layer();

		// player
		const player = this.physics.add.sprite(120, 145, "player-idle", 0);
		player.body.setOffset(35, 20);
		player.body.setSize(11, 44, false);
		playerLayer.add(player);

		// lists
		const levelTileSprites = [leftWallTileSprite, rightWallTileSprite, foregroundTileSprite, backgroundTileSprite];
		const walls = [leftWallTileSprite, rightWallTileSprite];

		this.player = player;
		this.editabletilemap = editabletilemap;
		this.levelTileSprites = levelTileSprites;
		this.walls = walls;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	player;
	/** @type {Phaser.Tilemaps.Tilemap} */
	editabletilemap;
	/** @type {Phaser.GameObjects.TileSprite[]} */
	levelTileSprites;
	/** @type {Phaser.GameObjects.TileSprite[]} */
	walls;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();

		// this.tilesprite_1.setScrollFactor(0);
		// this.tilesprite_2.setScrollFactor(0);

		this.player.body.enable = false;
		// this.time.delayedCall(500, () => {
		// 	// enable player physics after game starts
		// 	this.player.body.enable = true;
		// 	this.player.body.velocity.y = -500;

		// 	// have camera follow player
		// 	this.cameras.main.startFollow(this.player, true);
		// 	this.cameras.main.setDeadzone(this.scale.width);
		// });
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
