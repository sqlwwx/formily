import { Reaction } from './types'
export declare class Tracker {
  private results
  constructor(scheduler?: (reaction: Reaction) => void, name?: string)
  track: Reaction
  dispose: () => void
}
