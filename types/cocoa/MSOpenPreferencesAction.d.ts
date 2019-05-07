/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenPreferencesAction<T0 = void, T1 = void, T2 = void> extends MSAction {
    label<R = unknown>(): R;
    openPreferencesWindowWithPreferencePaneIdentifier<R = void, P0 = unknown>(_openPreferencesWindowWithPreferencePaneIdentifier: P0): R;
    openPreferences<R = void, P0 = unknown>(_openPreferences: P0): R;
  }
  namespace MSOpenPreferencesAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction {
      alloc<R = MSOpenPreferencesAction>(): R;
      new: <R = MSOpenPreferencesAction>() => R;
    }
  }
}

declare const MSOpenPreferencesAction: cocoa.MSOpenPreferencesAction.CLASS;
