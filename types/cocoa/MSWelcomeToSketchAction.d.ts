/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeToSketchAction<T0 = void, T1 = void, T2 = void> extends MSAction {
    label<R = unknown>(): R;
    welcomeToSketch<R = void, P0 = unknown>(_welcomeToSketch: P0): R;
  }
  namespace MSWelcomeToSketchAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction {
      alloc<R = MSWelcomeToSketchAction>(): R;
      new: <R = MSWelcomeToSketchAction>() => R;
    }
  }
}

declare const MSWelcomeToSketchAction: cocoa.MSWelcomeToSketchAction.CLASS;
