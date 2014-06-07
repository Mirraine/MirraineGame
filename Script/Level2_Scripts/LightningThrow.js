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


function OnTriggerEnter(objectHit:Collider)
{
	if(objectHit.gameObject.tag=="redcar")
	{
	Score.score++;
	Destroy(objectHit.gameObject);
	}
	
	if(objectHit.gameObject.tag=="bluecar")
	{
	Score.score++;
	Destroy(objectHit.gameObject);
	}
	
	
}