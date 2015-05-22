#pragma strict

public var bearSprite : Sprite;
public var bunnyPinkSprite : Sprite;
public var foxSprite : Sprite;
public var bunnyOrangeSprite : Sprite;

public static var sprites : Sprite[];

private var setSpriteNumber : SetSpriteNumber2;

function Start () {
	setSpriteNumber = GetComponentInChildren.<SetSpriteNumber2>();
	
	sprites = [bearSprite, bunnyPinkSprite, foxSprite, bunnyOrangeSprite];
}

function Update () {
	SwitchSprite();
}

function SwitchSprite ()	{
	gameObject.GetComponentInParent.<UnityEngine.UI.Image>().sprite = sprites[setSpriteNumber.spriteNumber];
}