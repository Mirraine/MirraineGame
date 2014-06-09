#pragma strict

//variables
var playerspeed:int;
var isgrounded : boolean;
var lives: int;
var life1 : Texture;
var life2 : Texture;
var life3 : Texture;
var life4 : Texture;
var lifefull: Texture;
var laser: Rigidbody;
var lightning: Rigidbody;
var blade: Rigidbody;
var redcar: Rigidbody;
var fireball: Rigidbody;
var pointed: Rigidbody;
var xpos: float;
var ypos: float;
var bounce: AudioSource;
var powerup: AudioSource;
var lasersound: AudioSource;
var lightningsound: AudioSource;
var swooshblade: AudioSource;


static var score: int;
private var anim:Animator;


function Start ()
	{
	 isgrounded = false;
	 anim=GetComponent(Animator);
	  lives = 5;
	  score = 0;
	}
	

function Update () {
Debug.Log(isgrounded);
	
	//making the player jump
	if(isgrounded == true)
    {
      if (Input.GetKeyDown(KeyCode.UpArrow))
      	{
			rigidbody.AddForce(Vector3(0,400,0));
			anim.SetInteger("jump",1);
			bounce.Play();
		}
		
		//using a different animation for the jump
		anim.SetInteger("jump",0);
		
		//Laser[Level1]
		if(Input.GetKeyDown(KeyCode.Space))
		{
		lasersound.Play();
		Instantiate(laser,Vector3(transform.position.x+1.5,transform.position.y,transform.position.z), Quaternion.identity);
		}
		
		//Lightning[Level2]
		if(Input.GetKeyDown(KeyCode.RightArrow))
		{
		lightningsound.Play();
		Instantiate(lightning,Vector3(transform.position.x+1.5,-2.50891,-9), Quaternion.identity);
		}
		
		//Blade [Level3/Boss]
		if(Input.GetKeyDown(KeyCode.B))
		{
		swooshblade.Play();
		Instantiate(blade,Vector3(transform.position.x+1.5,transform.position.y,transform.position.z), Quaternion.identity);
		}
		
		//Fireball[BossLevel]
		if(Input.GetKeyDown(KeyCode.LeftAlt))
		{
		Instantiate(fireball,Vector3(transform.position.x+1.5,transform.position.y,-9), Quaternion.identity);
		}
		
		//PointedBlade[BossLevel]
		if(Input.GetKeyDown(KeyCode.RightAlt))
		{
		Instantiate(pointed,Vector3(transform.position.x+1.5,transform.position.y,-9), Quaternion.identity);
		}
	
	
    }
	

}
	
	
function OnCollisionEnter(theCollision : Collision){

    if(theCollision.gameObject.tag == "ground")
    {
        isgrounded = true;
    }
   
    //if the player hits the power up
     if(theCollision.gameObject.tag == "powerupprefab")
    {
     lives ++;
     powerup.Play();
    Destroy(theCollision.gameObject); 
    }
    
     if(theCollision.gameObject.tag == "lightbulb")
    {
     lives ++;
     powerup.Play();
    Destroy(theCollision.gameObject); 
    }
    
    if(theCollision.gameObject.tag=="button")
    {
    lives++;
    powerup.Play();
    Destroy(theCollision.gameObject);
    }
    
    //The player hits an enemy
    if(theCollision.gameObject.tag == "puddle")
    {
     lives --;
    Destroy(theCollision.gameObject); 
    }
    
     if(theCollision.gameObject.tag == "crate")
    {
    	if(score<=0)
		{
		score = 0;
		}
		else
		{
		      Score.score--;
		}

    Destroy(theCollision.gameObject); 
    }
    
     if(theCollision.gameObject.tag == "redcar")
    {
     lives--;
    Destroy(theCollision.gameObject); 
    }
    
     if(theCollision.gameObject.tag == "bluecar")
    {
     	if(score<=0)
		{
		score = 0;
		}
		else
		{
		      Score.score--;
		}
    Destroy(theCollision.gameObject); 
    }
    
    if(theCollision.gameObject.tag == "asteroid")
    {
     lives --;
    Destroy(theCollision.gameObject); 
    }
    
    if(theCollision.gameObject.tag=="ufo")
    {
    Destroy(theCollision.gameObject);
    }
    if(theCollision.gameObject.tag=="redlaser")
    {
    lives --;
    Destroy(theCollision.gameObject);
    }
}
 

function OnCollisionExit(theCollision : Collision)
{
    if(theCollision.gameObject.tag == "ground")
    {
        isgrounded = false;
    }
 

    
}    
function OnGUI()
  	{

  
  if(lives==1)
	  {
	   GUI.DrawTexture(Rect(20,10,107,19), life1);
	  }
	  
	  else if(lives==2)
	  {
	   GUI.DrawTexture(Rect(20,10,107,19), life2);
	  }
	  
	  else if(lives==3)
	  {
	   GUI.DrawTexture(Rect(20,10,107,19), life3);
	  }
	  
	  else if(lives==4)
	  {
	   GUI.DrawTexture(Rect(20,10,107,19), life4);
	  }
	  
	  else if(lives==5)
	  {
	  GUI.DrawTexture(Rect(20,10,107,19), lifefull);
	  }
	  
	  else if(lives==0)
	  {
	  Application.LoadLevel(0);
	  }
	  
	  
	  
	  
  }
  
  
