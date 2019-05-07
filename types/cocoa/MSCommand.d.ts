/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCommand<T0 = void, T1 = void, T2 = void> extends NSObject {
    run<R = unknown>(): R;
  }
  namespace MSCommand {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSCommand>(): R;
      new: <R = MSCommand>() => R;
      runWithArguments<R = unknown, P0 = CDUnknownBlockType>(_runWithArguments: P0): R;
    }
  }
}

declare const MSCommand: cocoa.MSCommand.CLASS;
