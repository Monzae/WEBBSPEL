#pragma strict

private var pink : Color;
private var white : Color;
private var setSpriteNumber1 : SetSpriteNumber1;
private var setSpriteNumber2 : SetSpriteNumber2;
private var changeSprite1 : ChangeSprite1;
private var changeSprite2 : ChangeSprite2;
private var characterSelects : GameObject[];

function Start () {
	setSpriteNumber1 = FindObjectOfType.<SetSpriteNumber1>();
	setSpriteNumber2 = FindObjectOfType.<SetSpriteNumber2>();
	characterSelects = GameObject.FindGameObjectsWithTag("CharacterSelect");
	
	pink = Color(1f, 0.2f, 0.2f);
	white = Color(1.0f, 1.0f,1.0f);
}

function Update () {
	Checker ();
}

function Checker ()	{
	if (setSpriteNumber1.spriteNumber == setSpriteNumber2.spriteNumber)	{
		for (var i = 0; i < characterSelects.Length; i++)	{
			characterSelects[i].GetComponent.<UnityEngine.UI.Image>().color = pink;
		}
	}
	
	else	{
		for (var j = 0; j < characterSelects.Length; j++)	{
			characterSelects[j].GetComponent.<UnityEngine.UI.Image>().color = white;
		}
	}
}