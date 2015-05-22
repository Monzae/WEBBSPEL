#pragma strict

public var secondsToWait : float;

private var randomNumber : int;
private var secondsToBlink : float;
private var playerVelocity : Vector2;
private var checkpoints : GameObject[];
private var renderParent : Renderer;
private var headCollider : CircleCollider2D;
private var playerBehaviour : PlayerBehaviour;
private var findPlayerNameS : FindPlayerName[];

function Start () {
	renderParent = GetComponentInParent.<Renderer>();
	headCollider = GetComponent.<CircleCollider2D>();
	playerBehaviour = GetComponentInParent.<PlayerBehaviour>();
	findPlayerNameS = FindObjectsOfType.<FindPlayerName>();
	
	secondsToBlink = secondsToWait / 10;
	playerVelocity.Set(0, 0);
	if( renderParent !=null)
	BlinkingTexture ();
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
	
	playerBehaviour.isInfected = false;
	playerBehaviour.SetAnimator();
}

function RandomSpawn()	{
	checkpoints = GameObject.FindGameObjectsWithTag("CheckpointPlayer");
	randomNumber = Random.Range(0, checkpoints.Length);
	
	GetComponentInParent.<Rigidbody2D>().velocity = playerVelocity;
	transform.parent.position = checkpoints[randomNumber].transform.position;
}

function BlinkingTexture()	{
	for (var i = 0; i < 5; i++)	{
		findPlayerNameS[playerBehaviour.playerNumber - 1].guiT.enabled = true;
		
		renderParent.enabled = true;
		
		yield WaitForSeconds(secondsToBlink);
		
		renderParent.enabled = false;
		
		yield WaitForSeconds (secondsToBlink);
	
	}
	
	renderParent.enabled = true;
	findPlayerNameS[playerBehaviour.playerNumber - 1].guiT.enabled = false;
}

function Immortality(secondsToWait : float)	{
	headCollider.enabled = false;
	
	yield WaitForSeconds(secondsToWait);
	
	headCollider.enabled = true;
}