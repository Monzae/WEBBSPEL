#pragma strict

public var target : Transform;
public var offset : Vector3;
public var useMainCamera = true;
public var cameraToUse : Camera;

private var clampToScreen : boolean;
private var clampBorderSize = .05f;
private var cam : Camera;
private var thisTransform : Transform;
private var camTransform : Transform;

function Start () {
	thisTransform = transform;
	
	if (useMainCamera)	{
		cam = Camera.main;
	}
		else{
			cam = cameraToUse;
		}
	
	camTransform = cam.transform;
}

function Update () {
	TextDisplay ();
}

function TextDisplay ()	{
	thisTransform.position = cam.WorldToViewportPoint (target.position + offset);
}