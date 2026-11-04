// import { makeObservable, observable } from 'mobx';

import { makeAutoObservable } from "mobx";

export default class CounterStore {
    title = 'Counter store';
    count = 42;
    events: string[] = [
        `Initial count is ${this.count}`
    ]

    // constructor() {
    //     makeObservable(this, {
    //         title: observable,
    //         count: observable
    //     })
    // }
    // ve ya

    constructor() {
        makeAutoObservable(this)
    }

    //arrow function istifade edende funksiya class-a avtomatik bound olmus olur
    //eger arrow function istifade etmesek constructor-da increment:action.bound yazmaq lazimdir
    increment = (amount = 1) => {
        this.count += amount;
        this.events.push(`Incremented by ${amount} -  count is now ${this.count}`);
    }

    decrement = (amount = 1) => {
        this.count -= amount;
        this.events.push(`Decremented by ${amount} - count is now ${this.count}`);
    }

    get eventCount() {
        return this.events.length;
    }
}