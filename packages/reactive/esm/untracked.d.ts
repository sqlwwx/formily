export declare const untracked: {
  <F extends (...args: any) => any>(fn?: F): ReturnType<F>
  bound: <F_1 extends (...args: any[]) => any>(
    callback?: F_1,
    context?: any
  ) => F_1
}
