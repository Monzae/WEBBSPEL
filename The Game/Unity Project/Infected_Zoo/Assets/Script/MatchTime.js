#pragma strict

public var text : UnityEngine.UI.Text;
public var minutes : float;
public var seconds : float;

function Start () {
	InvokeRepeating("DecreaseSeconds", 1.0f, 1.0f);
}

function Update () {
	Timer();
}

function DecreaseSeconds()	{
	seconds--;
}

function Timer()	{
	if (minutes >= 0)	{
		text.text ="TIME\n" + minutes.ToString("00") + ":" + seconds.ToString("00");
	}
	
	if (seconds < 0)	{
		minutes--;
		seconds = 59;
	}
	
	if (minutes == 0 && seconds == 0)	{
		CancelInvoke("DecreseSeconds");
	}
}