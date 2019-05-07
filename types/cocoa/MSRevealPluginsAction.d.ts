/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRevealPluginsAction<T0 = void, T1 = void, T2 = void> extends MSAction {
    label<R = unknown>(): R;
    revealPlugins<R = void, P0 = unknown>(_revealPlugins: P0): R;
  }
  namespace MSRevealPluginsAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction {
      alloc<R = MSRevealPluginsAction>(): R;
      new: <R = MSRevealPluginsAction>() => R;
    }
  }
}

declare const MSRevealPluginsAction: cocoa.MSRevealPluginsAction.CLASS;
