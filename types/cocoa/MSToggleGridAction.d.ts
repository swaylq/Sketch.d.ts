/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleGridAction<T0 = void, T1 = void, T2 = void> extends MSToggleBaseAction {
    validate<R = boolean>(): R;
    tooltip<R = unknown>(): R;
    labelForToolbar<R = unknown>(): R;
    label<R = unknown>(): R;
    toggleGrid<R = void, P0 = unknown>(_toggleGrid: P0): R;
  }
  namespace MSToggleGridAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToggleBaseAction {
      alloc<R = MSToggleGridAction>(): R;
      new: <R = MSToggleGridAction>() => R;
    }
  }
}

declare const MSToggleGridAction: cocoa.MSToggleGridAction.CLASS;
