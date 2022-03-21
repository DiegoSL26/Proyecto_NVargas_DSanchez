import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export class Administrador{

  nombre:string;
  contra:string;

  crear (nombre:string,contra:string){
    this.nombre=nombre;
    this.contra=contra;
  }

  constructor (){ }
}
