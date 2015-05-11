#pragma strict

public var bearSprite : Sprite;
public var bunnySprite : Sprite;
public var foxSprite : Sprite;

public static var sprites : Sprite[];
public static var currentSprite : String;

private var setSpriteNumber : SetSpriteNumber1;

function Start () {
	setSpriteNumber = GetComponentInChildren.<SetSpriteNumber1>();
	
	sprites = [bearSprite, bunnySprite, foxSprite];
}

function Update () {
	SwitchSprite();
}

function SwitchSprite ()	{
	gameObject.GetComponentInParent.<UnityEngine.UI.Image>().sprite = sprites[setSpriteNumber.spriteNumber];
	
	currentSprite = sprites[setSpriteNumber.spriteNumber].ToString();
}