#pragma strict
var puddle:Rigidbody;

function createPuddle()
{
	var xposition:float;
	var yposition:float;
	
	xposition = Camera.main.transform.position.x+6;
	yposition = -4;
	
	Instantiate(puddle,Vector3(xposition,yposition,1),Quaternion.identity);
}


function Start () {

	InvokeRepeating("createPuddle",2.0,4.0);
}

function Update () {

}