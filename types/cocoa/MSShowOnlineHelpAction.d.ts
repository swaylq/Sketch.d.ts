/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShowOnlineHelpAction<T0 = void, T1 = void, T2 = void> extends MSAction {
    label<R = unknown>(): R;
    showOnlineHelp<R = void, P0 = unknown>(_showOnlineHelp: P0): R;
  }
  namespace MSShowOnlineHelpAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction {
      alloc<R = MSShowOnlineHelpAction>(): R;
      new: <R = MSShowOnlineHelpAction>() => R;
    }
  }
}

declare const MSShowOnlineHelpAction: cocoa.MSShowOnlineHelpAction.CLASS;
