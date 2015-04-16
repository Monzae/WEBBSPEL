using UnityEngine;
using System.Collections;

public class Player1Collision : MonoBehaviour {

    Player1Movement playerMovement;
    Transform transformOfPlayerMovement;
    Rigidbody2D rigidbody;
    public Vector2 hitForce;
	// Use this for initialization
	void Start () 
    {
        this.transformOfPlayerMovement = GameObject.FindGameObjectWithTag("Player1").transform;
        this.playerMovement = this.transformOfPlayerMovement.GetComponent<Player1Movement>();
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
        if (other.gameObject.tag == "P2DeathCollider")
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
