#pragma strict
var ufo:Rigidbody;

function createUFO()
{
	var xposition:int;
	var yposition:int;
	
	
	xposition = Random.Range(8,11);
	yposition = Random.Range(-5,5);
	
	
	xposition = transform.position.x + xposition;
	Instantiate(ufo,Vector3(xposition,yposition,-9),Quaternion.identity);
}


function Start () 
{
	
	InvokeRepeating("createUFO",1.0,1.0);
}

function Update () {

}