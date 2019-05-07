/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorCounter<T0 = void, T1 = void, T2 = void> extends MSObjectCounter {
    title<R = NSString>(): R;
    color<R = MSColor>(): R;
    immutableColor<R = MSImmutableColor>(): R;
  }
  namespace MSColorCounter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSObjectCounter {
      alloc<R = MSColorCounter>(): R;
      new: <R = MSColorCounter>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const MSColorCounter: cocoa.MSColorCounter.CLASS;
