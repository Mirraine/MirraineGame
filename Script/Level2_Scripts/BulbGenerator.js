#pragma strict
var lightbulb:GameObject;

function createPowerUp()
{
	var xposition:float;
	var yposition:float;
	
	xposition = Camera.main.transform.position.x;
	yposition = 1;
	
	
	Instantiate(lightbulb,Vector3(xposition,yposition,-9),Quaternion.identity);
}


function Start () 
{

	InvokeRepeating("createPowerUp",10.0,10.0);
}

function Update () {

}

