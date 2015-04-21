#pragma strict

public var moveSpeed : float;
public var jumpHeight : float;
public var groundCheck : Transform;
public var groundCheckRadius : float;
public var whatIsGround : LayerMask;

private var grounded : boolean;
private var playerVelocity : Vector2;

function Start () {

}

function Update () {
	grounded = Physics2D.OverlapCircle(groundCheck.position, groundCheckRadius, whatIsGround);
	
	Movement();
}

function Movement()	{
	
		if (Input.GetKeyDown(KeyCode.W) && grounded)	{
			Jump();
		}
		
		if (Input.GetKey(KeyCode.A))	{
			playerVelocity.Set(-moveSpeed, GetComponent.<Rigidbody2D>().velocity.y);
			GetComponent.<Rigidbody2D>().velocity = playerVelocity;
		}
		
		if (Input.GetKey(KeyCode.D))	{
			playerVelocity.Set(moveSpeed, GetComponent.<Rigidbody2D>().velocity.y);
			GetComponent.<Rigidbody2D>().velocity = playerVelocity;
		}
}

function Jump()	{
	playerVelocity.Set(GetComponent.<Rigidbody2D>().velocity.x, jumpHeight);
	GetComponent.<Rigidbody2D>().velocity = playerVelocity;
}