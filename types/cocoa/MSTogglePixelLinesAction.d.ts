/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTogglePixelLinesAction<T0 = void, T1 = void, T2 = void> extends MSToggleViewPreferenceAction {
    label<R = unknown>(): R;
    togglePixelLines<R = void, P0 = unknown>(_togglePixelLines: P0): R;
  }
  namespace MSTogglePixelLinesAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToggleViewPreferenceAction {
      alloc<R = MSTogglePixelLinesAction>(): R;
      new: <R = MSTogglePixelLinesAction>() => R;
    }
  }
}

declare const MSTogglePixelLinesAction: cocoa.MSTogglePixelLinesAction.CLASS;
