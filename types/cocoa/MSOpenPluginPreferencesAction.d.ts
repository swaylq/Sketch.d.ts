/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenPluginPreferencesAction<T0 = void, T1 = void, T2 = void> extends MSAction {
    label<R = unknown>(): R;
    openPluginPreferences<R = void, P0 = unknown>(_openPluginPreferences: P0): R;
  }
  namespace MSOpenPluginPreferencesAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction {
      alloc<R = MSOpenPluginPreferencesAction>(): R;
      new: <R = MSOpenPluginPreferencesAction>() => R;
    }
  }
}

declare const MSOpenPluginPreferencesAction: cocoa.MSOpenPluginPreferencesAction.CLASS;
