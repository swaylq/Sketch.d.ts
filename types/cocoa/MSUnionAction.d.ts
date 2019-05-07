/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUnionAction<T0 = void, T1 = void, T2 = void> extends MSBaseBooleanAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    booleanUnion<R = void, P0 = unknown>(_booleanUnion: P0): R;
  }
  namespace MSUnionAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseBooleanAction {
      alloc<R = MSUnionAction>(): R;
      new: <R = MSUnionAction>() => R;
    }
  }
}

declare const MSUnionAction: cocoa.MSUnionAction.CLASS;
