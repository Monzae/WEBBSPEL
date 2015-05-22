#pragma strict

public var playerNumber : int;
public var moveSpeed : float;
public var infectedSpeed : float;
public var infectedJumpHeight : float;
public var jumpHeight : float;
public var infectedDuration : float;
public var groundCheckRadius : float;
public var isInfected : boolean;
public var groundCheck : Transform;
public var whatIsGround : LayerMask;

private var virusNumber : int;
private var infectedDurationStart : float;
private var startJumpHeight : float;
private var grounded : boolean;
private var facingLeft : boolean;
private var playerVelocity : Vector2;
private var animatorToUse : String;
private var animator : Animator;
private var virusBehaviour : VirusBehaviour;
private var spriteSave : SpriteSave;

function Start () {
	startJumpHeight = jumpHeight;

	animator = GetComponent.<Animator> ();
	virusBehaviour = FindObjectOfType.<VirusBehaviour> ();
	spriteSave = FindObjectOfType.<SpriteSave> ();
	
	infectedDurationStart = infectedDuration;
	
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
		SetVirusNumber ();
		SetInfectedAnimator ();
	}
}

function Movement ()	{
	if (playerNumber == 1)	{
		if (Input.GetKeyDown(KeyCode.UpArrow) && grounded)	{
			Jump (jumpHeight);
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
			Jump (jumpHeight);
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

function Jump (height : float)	{
	playerVelocity.Set(GetComponent.<Rigidbody2D> ().velocity.x, height);
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
	if (virusNumber == 0)	{
		if (facingLeft)	{
			playerVelocity.Set(-infectedSpeed, GetComponent.<Rigidbody2D> ().velocity.y);
			GetComponent.<Rigidbody2D> ().velocity = playerVelocity;
		}
			else	{
				playerVelocity.Set(infectedSpeed, GetComponent.<Rigidbody2D> ().velocity.y);
				GetComponent.<Rigidbody2D> ().velocity = playerVelocity;
			}
	}
	if (virusNumber == 1)	{
		jumpHeight = infectedJumpHeight;
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
		jumpHeight = startJumpHeight;
		SetAnimator ();
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

public function SetAnimator ()	{
	if (playerNumber == 1)	{
		if (spriteSave.spriteNumber1 == 0)	{
			animatorToUse = "BearAnimator";
		}
		
		if (spriteSave.spriteNumber1 == 1)	{
			animatorToUse = "BunnyPinkAnimator";
		}
		
		if (spriteSave.spriteNumber1 == 2)	{
			animatorToUse = "FoxAnimator";
		}
		
		if (spriteSave.spriteNumber1 == 3)	{
			animatorToUse = "BunnyOrangeAnimator";
		}
	}
	
	if (playerNumber == 2)	{
		if (spriteSave.spriteNumber2 == 0)	{
			animatorToUse = "BearAnimator";
		}
		
		if (spriteSave.spriteNumber2 == 1)	{
			animatorToUse = "BunnyPinkAnimator";
		}
		
		if (spriteSave.spriteNumber2 == 2)	{
			animatorToUse = "FoxAnimator";
		}
		
		if (spriteSave.spriteNumber2 == 3)	{
			animatorToUse = "BunnyOrangeAnimator";
		}
	}
	
	animator.runtimeAnimatorController = Instantiate(Resources.Load(animatorToUse, RuntimeAnimatorController));
}

function SetInfectedAnimator ()	{
	if (playerNumber == 1)	{
		if (spriteSave.spriteNumber1 == 0)	{
			animatorToUse = "BearInfectedAnimator";
		}
		
		if (spriteSave.spriteNumber1 == 1)	{
			animatorToUse = "BunnyPinkInfectedAnimator";
		}
		
		if (spriteSave.spriteNumber1 == 2)	{
			animatorToUse = "FoxInfectedAnimator";
		}
		
		if (spriteSave.spriteNumber1 == 3)	{
			animatorToUse = "BunnyOrangeInfectedAnimator";
		}
	}
	
	if (playerNumber == 2)	{	
		if (spriteSave.spriteNumber2 == 0)	{
			animatorToUse = "BearInfectedAnimator";
		}
		
		if (spriteSave.spriteNumber2 == 1)	{
			animatorToUse = "BunnyPinkInfectedAnimator";
		}
		
		if (spriteSave.spriteNumber2 == 2)	{
			animatorToUse = "FoxInfectedAnimator";
		}
		
		if (spriteSave.spriteNumber2 == 3)	{
			animatorToUse = "BunnyOrangeInfectedAnimator";
		}
	}
	
	animator.runtimeAnimatorController = Instantiate(Resources.Load(animatorToUse, RuntimeAnimatorController));
}

function SetVirusNumber ()	{
	virusNumber = virusBehaviour.spriteNumber;
}