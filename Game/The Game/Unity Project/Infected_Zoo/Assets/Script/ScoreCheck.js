#pragma strict

public static var player1 : boolean = false;
public static var player2 : boolean = false;

private var scorePlayer1 : int;
private var scorePlayer2 : int;
private var lowestScore : int;
private var scores : int[];
private var entries : String[];
private var scoreSave : ScoreSave;
private var streamReader : System.IO.StreamReader;

function Start () {
	streamReader = new System.IO.StreamReader("score.txt");
	
	scorePlayer1 = scoreSave.scorePlayer1;
	scorePlayer2 = scoreSave.scorePlayer2;
}

function Update () {

}

function CheckScore ()	{	
	lowestScore = scores[0];
	
	if (scorePlayer1 > lowestScore)	{
		player1 = true;
	}
	
	if (scorePlayer2 > lowestScore)	{
		player2 = true;
	}
}

function GetScoreFromFile ()	{
	var content = streamReader.ReadToEnd();
	
	streamReader.Close();
	
	entries = content.Split(","[0]);
	
	for (var i = 0; i < entries.Length; i += 2)	{
		scores.SetValue(int, parseInt(entries[i]));
	}
	
	scores.Sort(scores);
}