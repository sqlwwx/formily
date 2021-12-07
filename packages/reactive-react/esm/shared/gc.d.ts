export declare class GarbageCollector<T extends object = any> {
  private expireTime
  private request?
  private token
  constructor(clean?: () => void, expireTime?: number)
  open(target: T): void
  close(): void
}
