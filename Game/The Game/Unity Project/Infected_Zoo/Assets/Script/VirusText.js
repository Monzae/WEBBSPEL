#pragma strict

public var text : UnityEngine.UI.Text;

private var seconds : float;
private var virusBehaviour : VirusBehaviour;

function Start () {
	virusBehaviour = FindObjectOfType.<VirusBehaviour>();
}

function Update () {
	seconds = virusBehaviour.invisibleDuration;
	
	if (virusBehaviour.isActive == false)	{
		text.text = "The virus will be back in \n" + seconds.ToString("00");
	}
	
		else	{
			text.text = "";
		}
}
