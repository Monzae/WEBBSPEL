#pragma strict
var playerVelocity : Vector2;

//private var player : PlayerBehaviour;
private var checkpoints : GameObject[];
private var randomNumber : int;


function Start () {
	//player = FindObjectOfType(PlayerBehaviour);
	playerVelocity.Set(0, 0);
}

function Update () {

}

public function RespawnPlayer() {
	RandomSpawn();
}

function RandomSpawn()	{
	checkpoints = GameObject.FindGameObjectsWithTag("Checkpoint");
	randomNumber = Random.Range(0, checkpoints.Length);
	
	GetComponent.<Rigidbody2D>().velocity = playerVelocity;
	transform.position = checkpoints[randomNumber].transform.position;
}