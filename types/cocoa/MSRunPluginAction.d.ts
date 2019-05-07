/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRunPluginAction<T0 = void, T1 = void, T2 = void> extends MSAction {
    label<R = unknown>(): R;
    runPlugin<R = void, P0 = unknown>(_runPlugin: P0): R;
  }
  namespace MSRunPluginAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction {
      alloc<R = MSRunPluginAction>(): R;
      new: <R = MSRunPluginAction>() => R;
    }
  }
}

declare const MSRunPluginAction: cocoa.MSRunPluginAction.CLASS;
