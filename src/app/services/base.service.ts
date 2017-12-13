import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
private isCollapsed:boolean;
private screen:string;
private actionUser:string;
constructor() { }

	public get $isCollapsed(): boolean {
		return this.isCollapsed;
	}

	public set $isCollapsed(value: boolean) {
		this.isCollapsed = value;
        console.log(this.$isCollapsed);
	}

	public get $actionUser(): string {
		return this.actionUser;
	}

	public set $actionUser(value: string) {
		this.actionUser = value;
	}

	public get $screen(): string {
		return this.screen;
	}

	public set $screen(value: string) {
		this.screen = value;
	}

}