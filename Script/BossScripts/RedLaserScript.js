#pragma strict
//speed of laser
var speedOfLaser:int;



function OnBecameInvisible()
{
	Destroy(this.gameObject);
}




function Start () {

}

function Update () {
	transform.Translate(Vector3.left * speedOfLaser * Time.deltaTime);
}