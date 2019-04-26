/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIBPrototypingLayoutConstraint<T0 = void, T1 = void, T2 = void> extends NSLayoutConstraint {}
  namespace NSIBPrototypingLayoutConstraint {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSLayoutConstraint {
      alloc<R = NSIBPrototypingLayoutConstraint>(): R;
      new: <R = NSIBPrototypingLayoutConstraint>() => R;
      classFallbacksForKeyedArchiver<R = unknown>(): R;
    }
  }
}

declare const NSIBPrototypingLayoutConstraint: cocoa.NSIBPrototypingLayoutConstraint.CLASS;
