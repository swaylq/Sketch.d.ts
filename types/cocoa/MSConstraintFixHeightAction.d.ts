/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConstraintFixHeightAction<T0 = void, T1 = void, T2 = void> extends MSConstraintAction {
    label<R = unknown>(): R;
    validationKeyPath<R = unknown>(): R;
    actionKeyPath<R = unknown>(): R;
    fixHeightAction<R = void, P0 = unknown>(_fixHeightAction: P0): R;
  }
  namespace MSConstraintFixHeightAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSConstraintAction {
      alloc<R = MSConstraintFixHeightAction>(): R;
      new: <R = MSConstraintFixHeightAction>() => R;
    }
  }
}

declare const MSConstraintFixHeightAction: cocoa.MSConstraintFixHeightAction.CLASS;
