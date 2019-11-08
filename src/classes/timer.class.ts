
export class TimerClass {
  decasecondsRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;

  public constructor(decasecondsRemaining: number, displayTime: string, 
                      runTimer: boolean, hasStarted: boolean, hasFinished: boolean) {
    this.decasecondsRemaining = decasecondsRemaining;
    this.runTimer = runTimer;
    this.hasStarted = hasStarted;
    this.hasFinished = hasFinished;
    this.displayTime = displayTime;
  }
}

