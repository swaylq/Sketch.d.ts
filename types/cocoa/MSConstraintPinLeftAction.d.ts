/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConstraintPinLeftAction<T0 = void, T1 = void, T2 = void> extends MSConstraintAction {
    label<R = unknown>(): R;
    validationKeyPath<R = unknown>(): R;
    actionKeyPath<R = unknown>(): R;
    pinLeftAction<R = void, P0 = unknown>(_pinLeftAction: P0): R;
  }
  namespace MSConstraintPinLeftAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSConstraintAction {
      alloc<R = MSConstraintPinLeftAction>(): R;
      new: <R = MSConstraintPinLeftAction>() => R;
    }
  }
}

declare const MSConstraintPinLeftAction: cocoa.MSConstraintPinLeftAction.CLASS;
