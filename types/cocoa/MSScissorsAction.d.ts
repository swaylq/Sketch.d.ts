/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSScissorsAction<T0 = void, T1 = void, T2 = void> extends MSEventHandlerAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    scissors<R = void, P0 = unknown>(_scissors: P0): R;
  }
  namespace MSScissorsAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSEventHandlerAction {
      alloc<R = MSScissorsAction>(): R;
      new: <R = MSScissorsAction>() => R;
    }
  }
}

declare const MSScissorsAction: cocoa.MSScissorsAction.CLASS;
