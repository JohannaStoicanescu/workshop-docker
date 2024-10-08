import { TimerRepository } from "./timer.repository";

export class TimerService {
  private timerRepository: TimerRepository;

  constructor(timerRepository: TimerRepository) {
    this.timerRepository = timerRepository;
  }
}
