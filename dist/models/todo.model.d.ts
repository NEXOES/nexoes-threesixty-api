import { Entity } from '@loopback/repository';
export declare class Todo extends Entity {
    id: string;
    title: string;
    description?: string;
    isComplete?: boolean;
    constructor(data?: Partial<Todo>);
}
export interface TodoRelations {
}
export declare type TodoWithRelations = Todo & TodoRelations;
