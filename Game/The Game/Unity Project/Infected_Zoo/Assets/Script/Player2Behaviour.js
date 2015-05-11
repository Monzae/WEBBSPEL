#pragma strict

public var moveSpeed : float;
public var jumpHeight : float;
public var groundCheck : Transform;
public var groundCheckRadius : float;
public var whatIsGround : LayerMask;

private var grounded : boolean;
private var playerVelocity : Vector2;
private var animator : Animator;

function Start () {
	animator = GetComponent.<Animator>();
}

function Update () {
	grounded = Physics2D.OverlapCircle(groundCheck.position, groundCheckRadius, whatIsGround);
	
	Animator();
	
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

function Animator()	{
	animator.SetBool("Grounded", grounded);
	
	animator.SetFloat("Speed", Mathf.Abs(GetComponent.<Rigidbody2D>().velocity.x));
	
	if (playerVelocity.x > 0)
		transform.localScale = new Vector3 (1f, 1f, 1f);
	
	else if (playerVelocity.x < 0)
		transform.localScale = new Vector3 (-1f, 1f, 1f);
}