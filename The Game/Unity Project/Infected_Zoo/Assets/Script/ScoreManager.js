#pragma strict

private var player : PlayerBehaviour;

function Start () {
	player = GetComponentInParent.<PlayerBehaviour>();
}

function Update () {
}

function OnTriggerEnter2D(other : Collider2D)	{	
	if (other.gameObject.tag == "Head")	{
		AddKillPoint ();
	}
}

function AddKillPoint ()	{
	if (player.playerNumber == 1)	{
		ScoreWriter.scoreP1 += 1;
	}
	
	if (player.playerNumber == 2)	{
		ScoreWriter.scoreP2 += 1;
	}
}