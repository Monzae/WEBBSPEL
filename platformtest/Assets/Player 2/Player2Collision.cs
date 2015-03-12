using UnityEngine;
using System.Collections;

public class Player2Collision : MonoBehaviour {

    Player2Movement playerMovement;
    Transform transformOfPlayerMovement;
    
	// Use this for initialization
	void Start () {
        this.transformOfPlayerMovement = GameObject.FindGameObjectWithTag("Player2").transform;
        this.playerMovement = this.transformOfPlayerMovement.GetComponent<Player2Movement>();
	}
	
	// Update is called once per frame
	void Update () {
	
	}
    void OnCollisionEnter2D(Collision2D other)
    {
        if (other.gameObject.tag == "Ground")
        {
            this.playerMovement.currentState = CurrentState.OnGround;
        }

    }
}
