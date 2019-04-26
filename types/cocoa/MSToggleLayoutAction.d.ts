/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleLayoutAction<T0 = void, T1 = void, T2 = void> extends MSToggleBaseAction {
    validate<R = boolean>(): R;
    tooltip<R = unknown>(): R;
    labelForToolbar<R = unknown>(): R;
    label<R = unknown>(): R;
    toggleLayout<R = void, P0 = unknown>(_toggleLayout: P0): R;
  }
  namespace MSToggleLayoutAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToggleBaseAction {
      alloc<R = MSToggleLayoutAction>(): R;
      new: <R = MSToggleLayoutAction>() => R;
    }
  }
}

declare const MSToggleLayoutAction: cocoa.MSToggleLayoutAction.CLASS;
