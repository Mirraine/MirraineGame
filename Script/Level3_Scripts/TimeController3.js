﻿#pragma strict

var timer: float = 30;

function Update()
{
 timer -= Time.deltaTime;
 
 if (timer<=0)
 {
  timer=0;
 }
 
 if(timer ==0)
 {
  Application.LoadLevel(7);
 }
}