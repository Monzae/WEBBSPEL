#pragma strict

public var levelManager : LevelManager;
public var secondsToWait : float;

private var randomNumber : int;
private var secondsToBlink : float;
private var playerVelocity : Vector2;
private var checkpoints : GameObject[];
private var renderParent : Renderer;
private var headCollider : CircleCollider2D;
private var player : PlayerBehaviour;

function Start () {
	renderParent = GetComponentInParent.<Renderer>();
	headCollider = GetComponent.<CircleCollider2D>();
	player = GetComponentInParent.<PlayerBehaviour>();
	
	secondsToBlink = secondsToWait / 10;
	playerVelocity.Set(0, 0);
}

function Update () {
}

function OnTriggerEnter2D(other : Collider2D)	{
	if (other.gameObject.tag == "Feet" || other.gameObject.tag == "Void") {
		RespawnPlayer();
	}
}

public function RespawnPlayer() {
	RandomSpawn();
	BlinkingTexture();
	Immortality(secondsToWait);
	
	player.isInfected = false;
}

function RandomSpawn()	{
	checkpoints = GameObject.FindGameObjectsWithTag("Checkpoint");
	randomNumber = Random.Range(0, checkpoints.Length);
	
	GetComponentInParent.<Rigidbody2D>().velocity = playerVelocity;
	transform.parent.position = checkpoints[randomNumber].transform.position;
}

function BlinkingTexture()	{
	for (var i = 0; i < 5; i++)	{
		renderParent.enabled = true;
		
		yield WaitForSeconds(secondsToBlink);
		
		renderParent.enabled = false;
		
		yield WaitForSeconds (secondsToBlink);
	
	}
	
	renderParent.enabled = true;
}

function Immortality(secondsToWait : float)	{
	headCollider.enabled = false;
	
	yield WaitForSeconds(secondsToWait);
	
	headCollider.enabled = true;
}