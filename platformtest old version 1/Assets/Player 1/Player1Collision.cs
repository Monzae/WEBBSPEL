using UnityEngine;
using System.Collections;

public class Player1Collision : MonoBehaviour {

    Player1Movement playerMovement;
    Transform transformOfPlayerMovement;
	// Use this for initialization
	void Start () {
        this.transformOfPlayerMovement = GameObject.FindGameObjectWithTag("Player1").transform;
        this.playerMovement = this.transformOfPlayerMovement.GetComponent<Player1Movement>();
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
