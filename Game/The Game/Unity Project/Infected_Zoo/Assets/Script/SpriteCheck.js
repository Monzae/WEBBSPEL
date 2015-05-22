#pragma strict

private var pink : Color;
private var white : Color;
private var theSame : boolean;
private var setSpriteNumber1 : SetSpriteNumber1;
private var setSpriteNumber2 : SetSpriteNumber2;
private var changeSprite1 : ChangeSprite1;
private var changeSprite2 : ChangeSprite2;
private var characterSelects : GameObject[];
private var buttonLevelSelect : GameObject;

function Start () {
	setSpriteNumber1 = FindObjectOfType.<SetSpriteNumber1>();
	setSpriteNumber2 = FindObjectOfType.<SetSpriteNumber2>();
	characterSelects = GameObject.FindGameObjectsWithTag("CharacterSelect");
	buttonLevelSelect = GameObject.FindGameObjectWithTag("ButtonLevelSelect");
	
	pink = Color(1f, 0.2f, 0.2f);
	white = Color(1.0f, 1.0f,1.0f);
}

function Update () {
	Checker ();
	
	if (theSame)	{
		DisableButton (buttonLevelSelect);
	}	else	{
		EnableButton (buttonLevelSelect);
	}
}

function Checker ()	{
	if (setSpriteNumber1.spriteNumber == setSpriteNumber2.spriteNumber)	{
		for (var i = 0; i < characterSelects.Length; i++)	{
			characterSelects[i].GetComponent.<UnityEngine.UI.Image>().color = pink;
			theSame = true;
		}
	}
	
	else	{
		for (var j = 0; j < characterSelects.Length; j++)	{
			characterSelects[j].GetComponent.<UnityEngine.UI.Image>().color = white;
			theSame = false;
		}
	}
}

function DisableButton (button : GameObject)	{
	button.GetComponent.<UnityEngine.UI.Button>().enabled = false;
}

function EnableButton (button : GameObject)	{
	button.GetComponent.<UnityEngine.UI.Button>().enabled = true;
}