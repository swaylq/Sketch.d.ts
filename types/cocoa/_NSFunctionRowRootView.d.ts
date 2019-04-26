/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFunctionRowRootView<T0 = void, T1 = void, T2 = void> extends NSFunctionRowBackgroundColorView {
    initWithFunctionRow<R = unknown, P0 = unknown>(_initWithFunctionRow: P0): R;
    functionRow<R = NSFunctionRow>(): R;
  }
  namespace _NSFunctionRowRootView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFunctionRowBackgroundColorView {
      alloc<R = _NSFunctionRowRootView>(): R;
      new: <R = _NSFunctionRowRootView>() => R;
    }
  }
}
