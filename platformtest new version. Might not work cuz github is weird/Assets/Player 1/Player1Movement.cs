using UnityEngine;
using System.Collections;
public enum CurrentState
{
    OnGround,
    InAir,
}
public class Player1Movement : MonoBehaviour {

    public float speed;
    public Vector2 jumpForce;
    Rigidbody2D rigidBody2d;
    public CurrentState currentState = CurrentState.OnGround;
   
	// Use this for initialization
	void Start () {
        this.rigidBody2d = this.gameObject.GetComponent<Rigidbody2D>();
	}
	
	// Update is called once per frame
	void Update () 
    {
        if(gameObject.tag =="Player1")
        Movement();
        //if (gameObject.tag == "Player2")
        //    MovementP2();
	
	}
    private void Movement()
    {
        if (Input.GetKey("left"))
        {
            this.gameObject.transform.position -= transform.right * speed;
        }
        if (Input.GetKey("right"))
        {
            this.gameObject.transform.position += transform.right * speed;
        }
        if (Input.GetKey("up") && this.currentState == CurrentState.OnGround)
        {
            this.rigidBody2d.AddForce(this.jumpForce);
            this.currentState = CurrentState.InAir;
        }
    }
    //private void MovementP2()
    //{
    //    if (Input.GetKey(KeyCode.A))
    //    {
    //        this.gameObject.transform.position -= transform.right * speed;
    //    }
    //    if (Input.GetKey(KeyCode.D))
    //    {
    //        this.gameObject.transform.position += transform.right * speed;
    //    }
    //    if (Input.GetKey(KeyCode.W) && this.currentState == CurrentState.OnGround)
    //    {
    //        this.rigidBody2d.AddForce(this.jumpForce);
    //        this.currentState = CurrentState.InAir;
    //    }
    //}
}
