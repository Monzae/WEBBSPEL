using UnityEngine;
using System.Collections;

public class Player2Collision : MonoBehaviour {

    Player2Movement playerMovement;
    Transform transformOfPlayerMovement;
    public Vector2 hitForce;
     new Rigidbody2D rigidbody;
	// Use this for initialization
	void Start () {
        this.transformOfPlayerMovement = GameObject.FindGameObjectWithTag("Player2").transform;
        this.playerMovement = this.transformOfPlayerMovement.GetComponent<Player2Movement>();
        this.rigidbody = gameObject.GetComponentInParent<Rigidbody2D>();
	}
	
	// Update is called once per frame
	void Update () {
	
	}
     void OnTriggerEnter2D(Collider2D other)
    {
        if (other.gameObject.tag == "Ground")
        {
            if(this.playerMovement != null)
            this.playerMovement.currentState = CurrentState.OnGround;
        }
        if (other.gameObject.tag == "P1DeathCollider")
        {
            this.rigidbody.AddForce(this.hitForce);
        }
    }
    void OnTriggerStay2D(Collider2D other)
    {
        if (other.gameObject.tag == "Ground")
        {
            if(this.playerMovement != null)
            this.playerMovement.currentState = CurrentState.OnGround;
        }
    }

    
}
