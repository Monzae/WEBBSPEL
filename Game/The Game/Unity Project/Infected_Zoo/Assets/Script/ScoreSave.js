#pragma strict

public static var scorePlayer1 : int;
public static var scorePlayer2 : int;

private var scoreWriter : ScoreWriter;

function Start () {
	scoreWriter = FindObjectOfType.<ScoreWriter> ();
	}

function Awake ()	{
	GameObject.DontDestroyOnLoad(transform.gameObject);
}

function Update () {
	scorePlayer1 = scoreWriter.scoreP1;
	scorePlayer2 = scoreWriter.scoreP2;
}

