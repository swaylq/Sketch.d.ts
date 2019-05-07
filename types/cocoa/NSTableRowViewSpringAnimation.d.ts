/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableRowViewSpringAnimation<T0 = void, T1 = void, T2 = void> extends NSSpringAnimation {
    endPercentage<R = number>(): R;
    setEndPercentage<R = void, P0 = number>(_v: P0): R;
    startPercentage<R = number>(): R;
    setStartPercentage<R = void, P0 = number>(_v: P0): R;
    percentage<R = number>(): R;
  }
  namespace NSTableRowViewSpringAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSpringAnimation {
      alloc<R = NSTableRowViewSpringAnimation>(): R;
      new: <R = NSTableRowViewSpringAnimation>() => R;
    }
  }
}

declare const NSTableRowViewSpringAnimation: cocoa.NSTableRowViewSpringAnimation.CLASS;
