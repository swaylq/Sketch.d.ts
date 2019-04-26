/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDisplayCyclePhase<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    description<R = unknown>(): R;
    initWithName_beforePhases_afterPhases<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithName: P0, _beforePhases: P1, _afterPhases: P2): R;
    name<R = NSString>(): R;
  }
  namespace NSDisplayCyclePhase {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDisplayCyclePhase>(): R;
      new: <R = NSDisplayCyclePhase>() => R;
    }
  }
}

declare const NSDisplayCyclePhase: cocoa.NSDisplayCyclePhase.CLASS;
