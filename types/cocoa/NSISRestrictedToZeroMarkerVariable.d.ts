/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISRestrictedToZeroMarkerVariable<T0 = void, T1 = void, T2 = void> extends NSISVariable {
    shouldBeMinimized<R = boolean>(): R;
    valueRestriction<R = number>(): R;
  }
  namespace NSISRestrictedToZeroMarkerVariable {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSISVariable {
      alloc<R = NSISRestrictedToZeroMarkerVariable>(): R;
      new: <R = NSISRestrictedToZeroMarkerVariable>() => R;
    }
  }
}

declare const NSISRestrictedToZeroMarkerVariable: cocoa.NSISRestrictedToZeroMarkerVariable.CLASS;
