#pragma strict
var powerup:GameObject;

function createPowerUp()
{
	var xposition:float;
	var yposition:float;
	
	xposition = Camera.main.transform.position.x+6;
	yposition = 1;

	Instantiate(powerup,Vector3(xposition,yposition,1),Quaternion.identity);
}


function Start () {

	InvokeRepeating("createPowerUp",10.0,15.0);
}

function Update () {

}

