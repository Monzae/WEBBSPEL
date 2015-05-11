using UnityEngine;
using System.Collections;
public enum CurrentState
{
    OnGround,
    InAir,
}
public class Player1Movement : MonoBehaviour
{

    public float speed;
    public float waterSpeed;
    public Vector2 waterJumpForce;
    public Vector2 jumpForce;
    Rigidbody2D rigidBody2d;
    public CurrentState currentState = CurrentState.OnGround;
    Deathscript deathscript;

    // Use this for initialization
    void Start()
    {
        this.deathscript = GetComponentInChildren<Deathscript>();
        this.rigidBody2d = this.gameObject.GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
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
        if (Input.GetKey("left") && this.deathscript.waterState == WaterState.inWater)
        {
            this.transform.position -= transform.right * waterSpeed;
        }
        else if (Input.GetKey("left"))
        {
            this.gameObject.transform.position -= transform.right * speed;
        }
        if (Input.GetKey("right") && this.deathscript.waterState == WaterState.inWater)
        {
            this.gameObject.transform.position += transform.right * waterSpeed;
        }
        else if (Input.GetKey("right"))
        {
            this.gameObject.transform.position += transform.right * speed;
        }
        if (Input.GetKey("up") && this.deathscript.waterState == WaterState.inWater)
        {
            this.rigidBody2d.AddForce(this.waterJumpForce);
        }
        else if (Input.GetKeyDown("up") && this.currentState == CurrentState.OnGround)
        {
            this.rigidBody2d.AddForce(this.jumpForce);
            this.currentState = CurrentState.InAir;

        }
    }
}
