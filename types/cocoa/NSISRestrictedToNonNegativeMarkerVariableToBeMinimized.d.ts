/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISRestrictedToNonNegativeMarkerVariableToBeMinimized<T0 = void, T1 = void, T2 = void> extends NSISVariable {
    shouldBeMinimized<R = boolean>(): R;
    valueRestriction<R = number>(): R;
  }
  namespace NSISRestrictedToNonNegativeMarkerVariableToBeMinimized {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSISVariable {
      alloc<R = NSISRestrictedToNonNegativeMarkerVariableToBeMinimized>(): R;
      new: <R = NSISRestrictedToNonNegativeMarkerVariableToBeMinimized>() => R;
    }
  }
}

declare const NSISRestrictedToNonNegativeMarkerVariableToBeMinimized: cocoa.NSISRestrictedToNonNegativeMarkerVariableToBeMinimized.CLASS;
