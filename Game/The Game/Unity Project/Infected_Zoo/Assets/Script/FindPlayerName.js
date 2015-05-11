#pragma strict

public var guiT : UnityEngine.GUIText;
public var playerName : String;

private var nameChange : NameChange;
private var playerBehaviour : PlayerBehaviour;

function Start () {
	nameChange = FindObjectOfType.<NameChange>();
	playerBehaviour = GetComponentInParent.<PlayerBehaviour>();
	guiT = GetComponent.<UnityEngine.GUIText>();
	
	guiT.enabled = false;
	
	if (playerBehaviour.playerNumber == 1)	{
		SetPlayer1Name ();
	}
	
	if (playerBehaviour.playerNumber == 2)	{
		SetPlayer2Name ();
	}
}

function Update () {

}

function SetPlayer1Name ()	{
	guiT.text = nameChange.namePlayer1;
	playerName = nameChange.namePlayer1;
}

function SetPlayer2Name ()	{
	guiT.text = nameChange.namePlayer2;
	playerName = nameChange.namePlayer2;
}