/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISRestrictedToNonNegativeVariableToBeMinimized<T0 = void, T1 = void, T2 = void> extends NSISVariable {
    shouldBeMinimized<R = boolean>(): R;
    valueRestriction<R = number>(): R;
  }
  namespace NSISRestrictedToNonNegativeVariableToBeMinimized {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSISVariable {
      alloc<R = NSISRestrictedToNonNegativeVariableToBeMinimized>(): R;
      new: <R = NSISRestrictedToNonNegativeVariableToBeMinimized>() => R;
    }
  }
}

declare const NSISRestrictedToNonNegativeVariableToBeMinimized: cocoa.NSISRestrictedToNonNegativeVariableToBeMinimized.CLASS;
