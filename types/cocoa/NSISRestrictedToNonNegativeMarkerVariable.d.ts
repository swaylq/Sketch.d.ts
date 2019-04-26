/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISRestrictedToNonNegativeMarkerVariable<T0 = void, T1 = void, T2 = void> extends NSISVariable {
    shouldBeMinimized<R = boolean>(): R;
    valueRestriction<R = number>(): R;
  }
  namespace NSISRestrictedToNonNegativeMarkerVariable {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSISVariable {
      alloc<R = NSISRestrictedToNonNegativeMarkerVariable>(): R;
      new: <R = NSISRestrictedToNonNegativeMarkerVariable>() => R;
    }
  }
}

declare const NSISRestrictedToNonNegativeMarkerVariable: cocoa.NSISRestrictedToNonNegativeMarkerVariable.CLASS;
