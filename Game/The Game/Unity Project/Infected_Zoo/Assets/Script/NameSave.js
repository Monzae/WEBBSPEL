#pragma strict

public static var namePlayer1 : String;
public static var namePlayer2 : String;

private var player1Input : GameObject;
private var player2Input : GameObject;

function Start () {
	player1Input = GameObject.FindGameObjectWithTag("Player1NameInput");
	player2Input = GameObject.FindGameObjectWithTag("Player2NameInput");
}

function Update () {

}

function Awake ()	{
	GameObject.DontDestroyOnLoad(transform.gameObject);
}

function NameChangePlayer1 (stringValue : String)	{
	if (namePlayer1 == "")	{
		namePlayer1 = "Player 1";
	}
		else{
			namePlayer1 = player1Input.GetComponent.<UnityEngine.UI.Text>().text;
		}
}

function NameChangePlayer2 (stringValue : String)	{
	if (namePlayer2 == "")	{
		namePlayer2 = "Player 2";
	}
		else{
			namePlayer2 = player2Input.GetComponent.<UnityEngine.UI.Text>().text;
		}
}