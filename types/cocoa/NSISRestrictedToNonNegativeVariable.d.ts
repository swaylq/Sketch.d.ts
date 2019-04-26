/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISRestrictedToNonNegativeVariable<T0 = void, T1 = void, T2 = void> extends NSISVariable {
    shouldBeMinimized<R = boolean>(): R;
    valueRestriction<R = number>(): R;
  }
  namespace NSISRestrictedToNonNegativeVariable {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSISVariable {
      alloc<R = NSISRestrictedToNonNegativeVariable>(): R;
      new: <R = NSISRestrictedToNonNegativeVariable>() => R;
    }
  }
}

declare const NSISRestrictedToNonNegativeVariable: cocoa.NSISRestrictedToNonNegativeVariable.CLASS;
