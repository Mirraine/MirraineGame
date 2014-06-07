#pragma strict
var redcar:Rigidbody;

function createredcar()
{
	var xposition:float;
	var yposition:float;
	
	xposition = Camera.main.transform.position.x+6;
	yposition = -4;
	
	
	
	Instantiate(redcar,Vector3(xposition,-2.50891,-9),Quaternion.identity);
}


function Start () {

	InvokeRepeating("createredcar",5.0,5.0);
}

function Update () {

}