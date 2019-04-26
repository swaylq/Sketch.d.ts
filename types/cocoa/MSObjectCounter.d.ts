/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSObjectCounter<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    compare_byUse<R = number, P0 = unknown, P1 = number>(_compare: P0, _byUse: P1): R;
    compare<R = number, P0 = unknown>(_compare: P0): R;
    secondarySortPriorities<R = unknown>(): R;
    countForUse<R = number, P0 = number>(_countForUse: P0): R;
    addUseCase<R = void, P0 = number>(_addUseCase: P0): R;
    initWithObject<R = unknown, P0 = unknown>(_initWithObject: P0): R;
    usageCounts<R = NSCountedSet>(): R;
    setUsageCounts<R = void, P0 = NSCountedSet>(_v: P0): R;
    object<R = unknown>(): R;
    setObject<R = void, P0 = unknown>(_v: P0): R;
    totalCount<R = number>(): R;
  }
  namespace MSObjectCounter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSObjectCounter>(): R;
      new: <R = MSObjectCounter>() => R;
    }
  }
}

declare const MSObjectCounter: cocoa.MSObjectCounter.CLASS;
