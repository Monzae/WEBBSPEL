#pragma strict

public var previousScene : String;

function Start () {

}

function Update () {
	if (Input.GetKey(KeyCode.Escape))	{
		PreviousScene (previousScene);
	}
}

function LoadScene (level : String)	{
	Application.LoadLevel (level);
}

function PreviousScene (level : String)	{
	Application.LoadLevel (level);
}