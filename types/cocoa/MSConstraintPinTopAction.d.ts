/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConstraintPinTopAction<T0 = void, T1 = void, T2 = void> extends MSConstraintAction {
    label<R = unknown>(): R;
    validationKeyPath<R = unknown>(): R;
    actionKeyPath<R = unknown>(): R;
    pinTopAction<R = void, P0 = unknown>(_pinTopAction: P0): R;
  }
  namespace MSConstraintPinTopAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSConstraintAction {
      alloc<R = MSConstraintPinTopAction>(): R;
      new: <R = MSConstraintPinTopAction>() => R;
    }
  }
}

declare const MSConstraintPinTopAction: cocoa.MSConstraintPinTopAction.CLASS;
