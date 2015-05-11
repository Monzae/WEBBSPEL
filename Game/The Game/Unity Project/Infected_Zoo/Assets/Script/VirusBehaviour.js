#pragma strict

public var invisibleDuration : float;
public var isActive : boolean;

private var invisibleDurationStart : float;
private var render : Renderer;

function Start () {
	render = GetComponent.<Renderer>();

	isActive = true;
	invisibleDurationStart = invisibleDuration;
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
		}
}