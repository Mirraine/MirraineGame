#pragma strict
function Start () {

}
function OnBecameInvisble()
{
Destroy(this.gameObject);
}

function Update () {
transform.Translate(Vector3.right*15*Time.deltaTime);
}

//If laser hit crate, crate is destroyed
function OnTriggerEnter(objectHit:Collider)
{
	if(objectHit.gameObject.tag=="crate")
	{
	Score.score++;
	Destroy(objectHit.gameObject);
	}
	
	
}