/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDisplayCyclePhaseCollection<T0 = void, T1 = void, T2 = void> extends NSObject {
    addPhase<R = void, P0 = unknown>(_addPhase: P0): R;
    dealloc<R = void>(): R;
    orderedPhases<R = NSArray>(): R;
    changeCount<R = number>(): R;
  }
  namespace NSDisplayCyclePhaseCollection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDisplayCyclePhaseCollection>(): R;
      new: <R = NSDisplayCyclePhaseCollection>() => R;
      globalCollection<R = unknown>(): R;
    }
  }
}

declare const NSDisplayCyclePhaseCollection: cocoa.NSDisplayCyclePhaseCollection.CLASS;
