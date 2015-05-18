#pragma strict

public var uiText : UnityEngine.UI.Text;

private var scoreSave : ScoreSave;

function Start () {
	scoreSave = FindObjectOfType.<ScoreSave> ();

	SetPlayerScore ();
}

function Update () {

}

function SetPlayerScore ()	{
		uiText.text = scoreSave.scorePlayer1.ToString ();
}
