#pragma strict

public var playerNumber : int;
public var moveSpeed : float;
public var jumpHeight : float;
public var infectedDuration : float;
public var groundCheckRadius : float;
public var isInfected : boolean;
public var groundCheck : Transform;
public var whatIsGround : LayerMask;

private var infectedDurationStart : float;
private var infectedSpeed : float;
private var grounded : boolean;
private var facingLeft : boolean;
private var playerVelocity : Vector2;
private var animatorToUse : String;
private var animator : Animator;
private var virusBehaviour : VirusBehaviour;
private var spriteSave : SpriteSave;

function Start () {
	animator = GetComponent.<Animator> ();
	virusBehaviour = FindObjectOfType.<VirusBehaviour> ();
	spriteSave = FindObjectOfType.<SpriteSave> ();
	
	infectedDurationStart = infectedDuration;
	infectedSpeed = moveSpeed * 1.5f;
	
	SetAnimator ();
}

function FixedUpdate ()	{
	grounded = Physics2D.OverlapCircle(groundCheck.position, groundCheckRadius, whatIsGround);
}

function Update () {
	CharacterAnimation ();
	Movement ();
	
	if(isInfected)	{
		Infected ();
	}
}

function OnTriggerEnter2D(other : Collider2D)	{
	if(other.gameObject.tag == "Virus")	{
		isInfected = true;
		virusBehaviour.isActive = false;
		
		AddVirusPoint ();
	}
}

function Movement ()	{
	if (playerNumber == 1)	{
		if (Input.GetKeyDown(KeyCode.UpArrow) && grounded)	{
			Jump ();
		}
		
		if (Input.GetKey(KeyCode.LeftArrow))	{
			MoveLeft ();
			facingLeft = true;
		}
		
		if (Input.GetKey(KeyCode.RightArrow))	{
			MoveRight ();			
			facingLeft = false;
		}
	}
	
	if (playerNumber == 2)	{
		if (Input.GetKeyDown(KeyCode.W) && grounded)	{
			Jump ();
		}
		
		if (Input.GetKey(KeyCode.A))	{
			MoveLeft ();			
			facingLeft = true;
		}
		
		if (Input.GetKey(KeyCode.D))	{
			MoveRight ();
			facingLeft = false;
		}
	}
}

function Jump ()	{
	playerVelocity.Set(GetComponent.<Rigidbody2D> ().velocity.x, jumpHeight);
	GetComponent.<Rigidbody2D> ().velocity = playerVelocity;
}

function MoveLeft ()	{
	playerVelocity.Set(-moveSpeed, GetComponent.<Rigidbody2D> ().velocity.y);
	GetComponent.<Rigidbody2D> ().velocity = playerVelocity;
}

function MoveRight ()	{
	playerVelocity.Set(moveSpeed, GetComponent.<Rigidbody2D>().velocity.y);
	GetComponent.<Rigidbody2D> ().velocity = playerVelocity;
}

function CharacterAnimation ()	{
	animator.SetBool("Grounded", grounded);
	animator.SetFloat("Speed", Mathf.Abs(GetComponent.<Rigidbody2D> ().velocity.x));
	
	if (playerVelocity.x > 0)	{
		transform.localScale = new Vector3 (1f, 1f, 1f);
	}
	
		else if (playerVelocity.x < 0)	{
			transform.localScale = new Vector3 (-1f, 1f, 1f);
		}
}

function Infected ()	{
	if (facingLeft)	{
		playerVelocity.Set(-infectedSpeed, GetComponent.<Rigidbody2D> ().velocity.y);
		GetComponent.<Rigidbody2D> ().velocity = playerVelocity;
	}
		else	{
			playerVelocity.Set(infectedSpeed, GetComponent.<Rigidbody2D> ().velocity.y);
			GetComponent.<Rigidbody2D> ().velocity = playerVelocity;
		}
		
	Timer();
}

function Timer ()	{
	if(infectedDuration >= 0)	{
		infectedDuration -= Time.fixedDeltaTime * .84f;
	}
		else	{
		isInfected = false;
		infectedDuration = infectedDurationStart;
		}
}

function AddVirusPoint ()	{
	if (playerNumber == 1)	{
		ScoreWriter.scoreP1 += 5;
	}
	
	if (playerNumber == 2)	{
		ScoreWriter.scoreP2 += 5;
	}
}

function SetAnimator ()	{
	if (playerNumber == 1)	{
		if (spriteSave.spriteNumber1 == 0)	{
			animatorToUse = "BearAnimator";
		}
		
		if (spriteSave.spriteNumber1 == 1)	{
			animatorToUse = "BunnyAnimator";
		}
		
		if (spriteSave.spriteNumber1 == 2)	{
			animatorToUse = "FoxAnimator";
		}
	}
	
	if (playerNumber == 2)	{
		Debug.Log(spriteSave.spriteNumber2);
	
		if (spriteSave.spriteNumber2 == 0)	{
			animatorToUse = "BearAnimator";
		}
		
		if (spriteSave.spriteNumber2 == 1)	{
			animatorToUse = "BunnyAnimator";
		}
		
		if (spriteSave.spriteNumber2 == 2)	{
			animatorToUse = "FoxAnimator";
		}
	}
	
	animator.runtimeAnimatorController = Instantiate(Resources.Load(animatorToUse, RuntimeAnimatorController));
}