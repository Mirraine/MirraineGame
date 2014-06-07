#pragma strict

function OnBecameInvisible()
{
//Image is placed on the other side once it is invisble.
transform.position.x = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
}


function Start () {

}

function Update () {

}