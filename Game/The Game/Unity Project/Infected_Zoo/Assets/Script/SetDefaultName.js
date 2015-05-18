#pragma strict

public var playerNumber : int;

private var nameSave : NameSave;
private var uiText : UnityEngine.UI.Text;

function Start () {
	nameSave = FindObjectOfType.<NameSave> ();
	uiText = GetComponent.<UnityEngine.UI.Text> ();
	
	if (playerNumber == 1)	{
		SetPlayer1DefaultName ();
	}
	if (playerNumber == 2)	{
		SetPlayer2DefaultName ();
	}
	
}

function Update () {

}

function SetPlayer1DefaultName ()	{
	if (nameSave.namePlayer1 == "" || nameSave.namePlayer1 == null)	{
		uiText.text = "Anonymous";
	}	else	{
			uiText.text = nameSave.namePlayer1;
		}
}

function SetPlayer2DefaultName ()	{
	if (nameSave.namePlayer2 == "" || nameSave.namePlayer2 == null)	{
		uiText.text = "Anonymous";
	}	else	{
			uiText.text = nameSave.namePlayer2;
			}
}