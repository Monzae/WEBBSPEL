using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class WriteScore : MonoBehaviour {

    public Text scoreText;
    int player1Score;
    int player2Score;
	void Start () 
    {
        scoreText.font.material.mainTexture.filterMode = FilterMode.Point;
        player1Score = Score.Player1Score;
        player2Score = Score.Player2Score;
        SetCountText();
	}
	
	// Update is called once per frame
	void Update () 
    {
        SetCountText();
	}

    void SetCountText()
    {
        player1Score = Score.Player1Score;
        player2Score = Score.Player2Score;
        scoreText.text = "Player1 Score: " + player1Score.ToString() + "\nPlayer2 Score: " + player2Score.ToString();
    }

}
