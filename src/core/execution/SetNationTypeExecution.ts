import { Execution, Game, NationType, Player } from "../game/Game";

export class SetNationTypeExecution implements Execution {
  private active = true;

  constructor(
    private player: Player,
    private nationType: NationType,
  ) {}

  init(_mg: Game, _ticks: number): void {
    // Nothing to initialize
  }

  tick(_ticks: number): void {
    // Only allow setting nation type if it hasn't been set yet
    if (this.player.nationType() === NationType.None) {
      this.player.setNationType(this.nationType);
    }
    this.active = false;
  }

  isActive(): boolean {
    return this.active;
  }

  activeDuringSpawnPhase(): boolean {
    return false;
  }
}
