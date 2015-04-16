using UnityEngine;
using System.Collections;
//public enum CurrentState
//{
//    OnGround,
//    InAir,
//}
public class Player2Movement : MonoBehaviour {

    public float speed;
    public float waterSpeed;
    public Vector2 waterJumpForce;
    public Vector2 jumpForce;
    public Vector2 hitForce;
    Rigidbody2D rigidBody2d;
    Deathscript deathscript;
    public CurrentState currentState = CurrentState.OnGround;
	void Start () 
    {
        this.deathscript = GetComponentInChildren<Deathscript>();
        this.rigidBody2d = this.gameObject.GetComponent<Rigidbody2D>();
        
	}
	
	// Update is called once per frame
	void Update () 
    {
        Movement();
        if (deathscript.waterState == WaterState.inWater)
        {
            this.rigidBody2d.drag = 15;
        }
        if (deathscript.waterState == WaterState.notInWater)
        {
            this.rigidBody2d.drag = 0;
        }
           
	}

   
    
        private void Movement()
    {
        
       if (Input.GetKey(KeyCode.A) && this.deathscript.waterState == WaterState.inWater)
        {
            this.transform.position -= transform.right * waterSpeed;
        }
        else if (Input.GetKey(KeyCode.A))
        {
            this.gameObject.transform.position -= transform.right * speed;
        }
        if (Input.GetKey(KeyCode.D) && this.deathscript.waterState == WaterState.inWater)
        {
            this.gameObject.transform.position += transform.right * waterSpeed;
        }
        else if (Input.GetKey(KeyCode.D))
        {
            this.gameObject.transform.position += transform.right * speed;
        }
        if (Input.GetKey(KeyCode.W) && this.deathscript.waterState == WaterState.inWater)
        {
            this.rigidBody2d.AddForce(this.waterJumpForce);
        }
        else if (Input.GetKeyDown(KeyCode.W) && this.currentState == CurrentState.OnGround)
        {
            this.rigidBody2d.AddForce(this.jumpForce);
            this.currentState = CurrentState.InAir;
            
        }
    }
        void OnTriggerEnter2D(Collider2D other)
        {
            if (other.gameObject.tag == "Player1")
            {
                this.rigidBody2d.AddForce(this.hitForce);
            }
        }
}
