#pragma strict

private var submitted : boolean;
private var nameSave : NameSave;
private var scoreSave : ScoreSave;
private var scoreCheck : ScoreCheck;
private var streamWriter : System.IO.StreamWriter;

function Start () {
	nameSave = FindObjectOfType.<NameSave>();
	scoreSave = FindObjectOfType.<ScoreSave>();
	scoreCheck = FindObjectOfType.<ScoreCheck>();
	streamWriter = new System.IO.StreamWriter("score.txt", true);
}

function Update () {

}

function SendScore ()	{
	scoreCheck.GetScoreFromFile();
	scoreCheck.CheckScore();
	
	Debug.Log(scoreSave.scorePlayer1);
	
	if (!submitted)	{	
		if (scoreCheck.player1 == true)	{
			SubmitScorePlayer1();
		}
		
		if (scoreCheck.player2 == true)	{
			SubmitScorePlayer2();
		}
		submitted = true;
	}
}
function ChooseScore()
{
if (scoreSave.scorePlayer1 > scoreSave.scorePlayer2)
	SubmitScorePlayer1();
	else
	SubmitScorePlayer2();
}

function SubmitScorePlayer1 ()	{
	if (nameSave.namePlayer1 != null)	{
		streamWriter.WriteLine(scoreSave.scorePlayer1.ToString() + "," + nameSave.namePlayer1);
		Debug.Log(nameSave.namePlayer1);
	}	else{
		streamWriter.WriteLine(scoreSave.scorePlayer1.ToString() + "," + "Anonymous");
	}
	streamWriter.Close();
}

function SubmitScorePlayer2 ()	{
	if (nameSave.namePlayer2 != null)	{
		streamWriter.WriteLine(scoreSave.scorePlayer2.ToString() + "," + nameSave.namePlayer2);
	}	else	{
		streamWriter.WriteLine(scoreSave.scorePlayer2.ToString() + "," + "Anonymous");
	}
	streamWriter.Close();
}