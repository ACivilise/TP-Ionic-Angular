/*Copyright Elysio, Inc.*/

import { Component, Input } from "@angular/core";
import { TimerClass } from "../../classes/timer.class";

@Component({
    selector: "component-timer",
    templateUrl: "timer.component.html",
})
export class TimerComponent {
    private timer: TimerClass;
    @Input() public done: () => {};
    constructor() {
        this.initTimer();
    }
    public startTimer() {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    }
    public pauseTimer() {
        this.timer.runTimer = false;
    }
    private handleClick() {
        if(this.timer.hasStarted)
        {
            this.pauseTimer();
            this.timer.hasStarted = false;
        }
        else{
            this.startTimer();
        }
    }
    private initTimer() {        
        this.timer = new TimerClass(10 * 10,"",false,false,false);
        this.timer.displayTime = this.getDecasecondsAsDigitalClock(this.timer.decasecondsRemaining);
    }
    private timerTick() {
        setTimeout(() => {
            if (!this.timer.runTimer) { return; }
            this.timer.decasecondsRemaining--;
            this.timer.displayTime = this.getDecasecondsAsDigitalClock(this.timer.decasecondsRemaining);
            if (this.timer.decasecondsRemaining > 0) {
                this.timerTick();
            } else {
                this.timer.hasFinished = true;
                this.done();
                //alert("boom"!);
            }
        }, 100);
    }
    private getDecasecondsAsDigitalClock(decasecondsRemaining: number) {        
        const minutes = Math.floor(decasecondsRemaining / 600);
        const seconds = Math.floor((decasecondsRemaining - (minutes * 600)) / 10);
        const decaseconds = decasecondsRemaining - (seconds * 10) - (minutes * 600);
        let minutesString = "";
        let secondsString = "";
        minutesString = (minutes < 10) ? ["0", minutes].join("") : minutes.toString();
        secondsString = (seconds < 10) ? ["0", seconds].join("") : seconds.toString();
        return [minutesString, ": ", secondsString, ": ", decaseconds.toString(), "0"].join("");
    }
}
