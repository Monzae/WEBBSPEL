#pragma strict

public static var spriteNumber : int;

private var sprites : Sprite[];
private var changeSprite : ChangeSprite2;

function Start () {
	changeSprite = GetComponentInParent.<ChangeSprite2>();
}

function Update () {
	SpriteNumberCheck ();
}

function SpriteNumberCheck ()	{
	if (spriteNumber < 0)	{
		spriteNumber = changeSprite.sprites.Length - 1;
	}
	
	if (spriteNumber > (changeSprite.sprites.Length - 1))	{
		spriteNumber = 0;
	}
}

function NextSprite ()	{
	spriteNumber++;
}

function PreviousSprite ()	{
	spriteNumber--;
}