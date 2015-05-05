#pragma strict

public var namePlayer1 : String;
public var namePlayer2 : String;

function Start () {

}

function Update () {

}

function NameChangePlayer1 (stringValue : String)	{
	if (namePlayer1 == "")	{
		namePlayer1 = "Player 1";
	}
		else{
			namePlayer1 = stringValue;
		}
}

function NameChangePlayer2 (stringValue : String)	{
	if (namePlayer2 == "")	{
		namePlayer2 = "Player 2";
	}
		else{
			namePlayer2 = stringValue;
		}
}