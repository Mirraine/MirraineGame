#pragma strict
var topMargin:int;
var bottomMargin:int;

var moveUp:boolean;
var moveDown:boolean;

var redlaser:Rigidbody;

function shootLaser()
{
	
	Instantiate(redlaser,transform.position,transform.rotation);

}



function Start () {
	InvokeRepeating("shootLaser",0.5,1.0);
	topMargin = 4;
	bottomMargin = -1;
	
	
	moveUp = true;
	moveDown = false;

}

function Update () {
	
	if (moveUp == true)
	{
		
		transform.Translate(Vector3.up * 5 * Time.deltaTime);
		if (transform.position.y >= topMargin)
		{
			moveUp = false;
			moveDown = true;
		}
		
	}
	
	if (moveDown == true)
	{
		transform.Translate(Vector3.down * 5 * Time.deltaTime);
		if (transform.position.y <= bottomMargin)
		{
			moveUp = true;
			moveDown = false;
		}
	}

}