#pragma strict

static var score: int;

function Start () {
DontDestroyOnLoad(this);


}

function OnGUI()
{
//This dispaly score
GUI.Box(new Rect(700, 10, 90, 20), "Score: " + score);
}

function Update () {
}


