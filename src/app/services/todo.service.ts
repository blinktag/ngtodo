import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

  private todos: Todo[];
  private nextId: number;

  constructor() {
    this.nextId = 0;
    this.todos = [];
    this.addTodo('Learn Angular');
    this.addTodo('Learn Rust');
    this.addTodo('Create first create');
   }

   public addTodo(text: string): void {
     let todo = new Todo(this.nextId, text);
     this.todos.push(todo);
     this.nextId++;
   }

   public getTodos(): Todo[] {
     return this.todos;
   }

   public removeTodo(id: number): void {
     this.todos = this.todos.filter(todo => todo.id != id);
   }

}