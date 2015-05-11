#pragma strict

public var bearSprite : Sprite;
public var bunnySprite : Sprite;
public var foxSprite : Sprite;

public static var sprites : Sprite[];

private var setSpriteNumber : SetSpriteNumber2;

function Start () {
	setSpriteNumber = GetComponentInChildren.<SetSpriteNumber2>();
	
	sprites = [bearSprite, bunnySprite, foxSprite];
}

function Update () {
	SwitchSprite();
}

function SwitchSprite ()	{
	gameObject.GetComponentInParent.<UnityEngine.UI.Image>().sprite = sprites[setSpriteNumber.spriteNumber];
}