#pragma strict
var bluecar:Rigidbody;

function createbluecar()
{
	var xposition:float;
	var yposition:float;
	
	xposition = Camera.main.transform.position.x+6;
	yposition = -4;
	
	
	
	Instantiate(bluecar,Vector3(xposition,-2.50891,-9),Quaternion.identity);
}


function Start () {
	
	InvokeRepeating("createbluecar",4.0,9.0);
}

function Update () {

}