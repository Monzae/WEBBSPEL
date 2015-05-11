using UnityEngine;
using System.Collections;

public class Score : MonoBehaviour {

   public static int Player1Score;
   public static int Player2Score;
	void Start () 
    {
        Player1Score = 0;
        Player2Score = 0;
	}
	
	// Update is called once per frame
	void Update () 
    {
	
	}

     void OnTriggerEnter2D(Collider2D other)
    {
        if (other.gameObject.tag == ("P1DeathCollider"))
        {
            Player2Score += 1;
        }
        if (other.gameObject.tag == ("P2DeathCollider"))
        {
            Player1Score += 1;
        }

    }
    void OnTriggerStay2D(Collider2D other)
     {
         if (other.gameObject.tag == ("P1DeathCollider"))
         {
             Player2Score += 1;
         }
         if (other.gameObject.tag == ("P2DeathCollider"))
         {
             Player1Score += 1;
         }
     }
}
