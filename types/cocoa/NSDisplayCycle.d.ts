/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDisplayCycle<T0 = void, T1 = void, T2 = void> extends NSObject {
    addObserver<R = void, P0 = unknown>(_addObserver: P0): R;
    containsObserver<R = boolean, P0 = unknown>(_containsObserver: P0): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithTransactionSeed<R = unknown, P0 = number>(_initWithTransactionSeed: P0): R;
    identifier<R = number>(): R;
  }
  namespace NSDisplayCycle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDisplayCycle>(): R;
      new: <R = NSDisplayCycle>() => R;
      currentDisplayCycleHasIdentifier<R = boolean, P0 = number>(_currentDisplayCycleHasIdentifier: P0): R;
      currentDisplayCycleContainsObserver<R = boolean, P0 = unknown>(_currentDisplayCycleContainsObserver: P0): R;
      currentDisplayCycle<R = unknown>(): R;
    }
  }
}

declare const NSDisplayCycle: cocoa.NSDisplayCycle.CLASS;
