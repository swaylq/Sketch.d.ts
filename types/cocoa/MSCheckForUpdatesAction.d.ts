/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCheckForUpdatesAction<T0 = void, T1 = void, T2 = void> extends MSSilentCheckForUpdatesAction {
    checkForUpdates<R = void, P0 = unknown>(_checkForUpdates: P0): R;
  }
  namespace MSCheckForUpdatesAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSilentCheckForUpdatesAction {
      alloc<R = MSCheckForUpdatesAction>(): R;
      new: <R = MSCheckForUpdatesAction>() => R;
    }
  }
}

declare const MSCheckForUpdatesAction: cocoa.MSCheckForUpdatesAction.CLASS;
