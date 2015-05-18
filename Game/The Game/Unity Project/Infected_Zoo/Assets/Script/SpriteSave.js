#pragma strict

public static var spriteNumber1 : int;
public static var spriteNumber2 : int;

private var setSpriteNumber1 : SetSpriteNumber1;
private var setSpriteNumber2 : SetSpriteNumber2;

function Start () {
	setSpriteNumber1 = FindObjectOfType.<SetSpriteNumber1> ();
	setSpriteNumber2 = FindObjectOfType.<SetSpriteNumber2> ();
}

function Awake ()	{
	GameObject.DontDestroyOnLoad (transform.gameObject);
}

function Update () {
	spriteNumber1 = setSpriteNumber1.spriteNumber;
	spriteNumber2 = setSpriteNumber2.spriteNumber;
}