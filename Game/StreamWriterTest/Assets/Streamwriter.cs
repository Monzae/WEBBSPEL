using UnityEngine;
using System.Collections;
using System.IO;
using UnityEngine.UI;

public class Streamwriter : MonoBehaviour {

    public Text score;
    public Text name;
    public Text submitButton;
    private bool ScoreSubmitted;
	void Start () 
    {
        ScoreSubmitted = false;
	}
	
	void Update () 
    {
	
	}

    public void AddScore()
    {

        if (!ScoreSubmitted)
        {
            using (StreamWriter sw1 = new StreamWriter("Score.txt", true))
            {
                if (name.text != "")
                {
                    sw1.WriteLine(score.text + "," + name.text.ToString());
                }
                else
                {
                    sw1.WriteLine(score.text + "," + "Anonymous");
                }
                ScoreSubmitted = true;
                submitButton.text = "Submitted!";
            } 
        }

    }
}
