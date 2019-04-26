/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSubtractAction<T0 = void, T1 = void, T2 = void> extends MSBaseBooleanAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    booleanSubtract<R = void, P0 = unknown>(_booleanSubtract: P0): R;
  }
  namespace MSSubtractAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseBooleanAction {
      alloc<R = MSSubtractAction>(): R;
      new: <R = MSSubtractAction>() => R;
    }
  }
}

declare const MSSubtractAction: cocoa.MSSubtractAction.CLASS;
