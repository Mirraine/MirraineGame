#pragma strict

var explosion: Rigidbody;

function Start () {

}
function OnBecameInvisble()
{
Destroy(this.gameObject);
}

function Update () {
transform.Translate(Vector3.right*15*Time.deltaTime);
}


function OnTriggerEnter(objectHit:Collider)
{
	if(objectHit.gameObject.tag=="asteroid")
	{
	Score.score++;
	Destroy(objectHit.gameObject);
	}
	
	if(objectHit.gameObject.tag=="ufo")
	{
	Score.score++;
	Destroy(objectHit.gameObject);
	Instantiate(explosion,transform.position,transform.rotation);
	Destroy(this.gameObject);
	}
	
	
}