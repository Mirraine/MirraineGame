#pragma strict

var button:GameObject;

function createButton()
{
	var xposition:float;
	var yposition:float;
	
	xposition = Camera.main.transform.position.x+6;
	yposition = 1;

	Instantiate(button,Vector3(xposition,yposition,-9),Quaternion.identity);
}


function Start () {

	InvokeRepeating("createButton",10.0,5.0);
}

function Update () {

}

