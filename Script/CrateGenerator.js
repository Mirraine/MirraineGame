#pragma strict
var crate:Rigidbody;

function createCrate()
{
	var xposition:float;
	var yposition:float;
	var zposition: float;
	
	xposition = Camera.main.transform.position.x+6;
	yposition = -3;
	zposition = 0;

	Instantiate(crate,Vector3(xposition,yposition,1),Quaternion.identity);
}


function Start () {
	InvokeRepeating("createCrate",6.0,5.0);
}

function Update () {

}