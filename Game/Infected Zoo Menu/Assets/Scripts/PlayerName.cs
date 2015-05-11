using UnityEngine;
using System.Collections;

public class PlayerName : MonoBehaviour {
    public string player1Name;
    public string player2Name;
	void Start () 
    {
        player1Name = "Player 1";
        player2Name = "Player 2";
	}
	
	void Update () 
    {
	
	}
    public void Player1NameChange(string value)
    {
        if (player1Name == "")
        {
            player1Name = "Player 1";
        }
        else
        player1Name = value;
    }

    public void Player2NameChange(string value)
    {
        if (player2Name == "")
        {
            player2Name = "Player 2";
        }
        else
        player2Name = value;
    }
}
