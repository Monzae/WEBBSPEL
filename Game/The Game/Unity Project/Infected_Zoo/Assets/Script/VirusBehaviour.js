#pragma strict

public static var spriteNumber : int;
public var invisibleDuration : float;
public var isActive : boolean;
public var texture1 : Sprite;
public var texture2 : Sprite;

private var randomNumber : int;
private var invisibleDurationStart : float;
private var render : Renderer;
private var checkpoints : GameObject [];
private var sprites : Sprite [];

function Start () {
	render = GetComponent.<Renderer>();
	sprites = [texture1, texture2];

	isActive = true;
	invisibleDurationStart = invisibleDuration;
	
	SetSprite ();
}

function Update () {
	if(isActive)	{
		gameObject.tag = "Virus";
		
		Visible ();
	}
		else	{
			gameObject.tag = "Untagged";
			
			Invisible ();
		}
}

function Visible ()	{
	render.enabled = true;
}

function Invisible ()	{
	render.enabled = false;
	
	InvisibleTimer ();
}

function InvisibleTimer ()	{
	if(invisibleDuration >= 0)	{
		invisibleDuration -= Time.fixedDeltaTime * .84f;
	}
		else	{
			isActive = true;
			invisibleDuration = invisibleDurationStart;
			
			SetSprite ();
			RandomLocation ();
		}
}

function RandomLocation ()	{
	checkpoints = GameObject.FindGameObjectsWithTag("CheckpointVirus");
	randomNumber = Random.Range(0, checkpoints.Length);
	
	transform.position = checkpoints[randomNumber].transform.position;
}

function SetSprite ()	{
	spriteNumber = Random.Range(0, sprites.Length);
	
	GetComponent.<SpriteRenderer>().sprite = sprites[spriteNumber];
}