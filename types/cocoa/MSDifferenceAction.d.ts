/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDifferenceAction<T0 = void, T1 = void, T2 = void> extends MSBaseBooleanAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    booleanDifference<R = void, P0 = unknown>(_booleanDifference: P0): R;
  }
  namespace MSDifferenceAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseBooleanAction {
      alloc<R = MSDifferenceAction>(): R;
      new: <R = MSDifferenceAction>() => R;
    }
  }
}

declare const MSDifferenceAction: cocoa.MSDifferenceAction.CLASS;
