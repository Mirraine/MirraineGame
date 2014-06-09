#pragma strict
var asteroid:Rigidbody;

function createAsteroid()
{
	var xposition:float;
	var yposition:float;
	
	xposition = Camera.main.transform.position.x+8;
	yposition = -1;

	Instantiate(asteroid,Vector3(xposition,yposition,-9.012),Quaternion.identity);
}


function Start () {

	InvokeRepeating("createAsteroid",2.0,4.0);
}

function Update () {

}