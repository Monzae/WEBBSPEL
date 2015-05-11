using UnityEngine;
using System.Collections;
//public enum CurrentState
//{
//    OnGround,
//    InAir,
//}
public class Player2Movement : MonoBehaviour {

    public float speed;
    public Vector2 jumpForce;
    Rigidbody2D rigidBody2d;
    public CurrentState currentState = CurrentState.OnGround;
	void Start () 
    {
        this.rigidBody2d = this.gameObject.GetComponent<Rigidbody2D>();
        
	}
	
	// Update is called once per frame
	void Update () 
    {
        Movement();
       
           
	}

   
    
        private void Movement()
    {
        
        if (Input.GetKey(KeyCode.A))
        {
            this.gameObject.transform.position -= transform.right * speed;
        }
        if (Input.GetKey(KeyCode.D))
        {
            this.gameObject.transform.position += transform.right * speed;
        }
        if (Input.GetKey(KeyCode.W) && this.currentState == CurrentState.OnGround)
        {
            this.rigidBody2d.AddForce(this.jumpForce);
            this.currentState = CurrentState.InAir;
        }
    }
}
