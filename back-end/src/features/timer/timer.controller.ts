import Timer from "./timer.model";
import { TimerService } from "./timer.service";

export class TimerController {
  constructor(private timerService: TimerService) {
    this.timerService = timerService;
  }

  getTimer = async (req: any, res: any) => {
    try {
      const { user_id } = req.params;
      const timer = await this.timerService.getTimer(user_id);
      return res.json(timer);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error occurred while getting the timer." });
    }
  };

  addTimer = async (req: any, res: any) => {
    try {
      console.log("ADD TIMER", req.body.user_id, req.body.time);
      if (!req.body || !req.body.user_id || !req.body.time) {
        return res
          .status(400)
          .json({ message: "Missing required fields: user_id or time" });
      }
      const { user_id, time } = req.body;
      const timer = await this.timerService.addTimer({ user_id, time });
      return res.json(timer);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error occurred while adding the timer." });
    }
  };
}
