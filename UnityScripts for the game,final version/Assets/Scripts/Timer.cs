using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class Timer : MonoBehaviour {

    public Text timerText;
    public float minutes;
    float seconds;

	void Start () 
    {
        timerText.font.material.mainTexture.filterMode = FilterMode.Point;
        timerText.text = "";
        InvokeRepeating("DecreaseTime", 1.0f, 1.0f);
	}
	
	// Update is called once per frame
	void Update () 
    {
        if (minutes>= 0)
        {
            
           // timerText.text = "Time: " + timer.ToString();

            timerText.text = "Time: " + minutes.ToString("00") +":" + seconds.ToString("00");
        }
        if (seconds <= 0)
        {
            minutes--;
            seconds = 59;
        }
        if (minutes == 0 && seconds == 0)
        {
            CancelInvoke("DecreaseTime");
        }

	}

    void DecreaseTime()
    {
        seconds--;
        
    }
}
