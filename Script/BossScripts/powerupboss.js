#pragma strict
var powerup:GameObject;

function createPowerUp()
{
	var xposition:float;
	var yposition:float;
	
	xposition = Camera.main.transform.position.x+6;
	yposition = 1;
	

	
	Instantiate(powerup,Vector3(xposition,yposition,-9),Quaternion.identity);
}


function Start () {
	//wait for half a second, then repeat every second
	InvokeRepeating("createPowerUp",10.0,10.0);
}

function Update () {

}

