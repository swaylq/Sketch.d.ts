/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCopyOverrideAction<T0 = void, T1 = void, T2 = void> extends MSOverrideAction {
    label<R = unknown>(): R;
    validationStatus<R = number>(): R;
    copyOverride<R = void, P0 = unknown>(_copyOverride: P0): R;
  }
  namespace MSCopyOverrideAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOverrideAction {
      alloc<R = MSCopyOverrideAction>(): R;
      new: <R = MSCopyOverrideAction>() => R;
    }
  }
}

declare const MSCopyOverrideAction: cocoa.MSCopyOverrideAction.CLASS;
