using UnityEngine;
using System.Collections;

public class CollisionGround : MonoBehaviour {

    Player2Movement playerMovement;
    Transform transformOfPlayerMovement;
	void Start () {
        this.transformOfPlayerMovement = GameObject.FindGameObjectWithTag("Player").transform;
        this.playerMovement = this.transformOfPlayerMovement.GetComponent<Player2Movement>();
	}
	
	
	void Update () {
	
	}

    void OnCollisionEnter2D(Collision2D other)
    {
        if(other.gameObject.tag == "Player")
        {
			this.playerMovement.currentState = CurrentState.OnGround;	
        }
       
    }
}
