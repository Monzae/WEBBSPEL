#pragma strict

public var scoreText : UnityEngine.UI.Text;
public static var scoreP1 : int;
public static var scoreP2 : int;

function Start () {
	scoreP1 = 0;
	scoreP2 = 0;
}

function Update () {
	SetCountText();
}

function SetCountText()	{
	scoreText.text = "SCORE" + "\nPlayer 1: " + scoreP1.ToString() + "\nPlayer 2: " + scoreP2.ToString();
}