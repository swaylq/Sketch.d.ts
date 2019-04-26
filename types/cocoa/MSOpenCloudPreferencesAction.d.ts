/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenCloudPreferencesAction<T0 = void, T1 = void, T2 = void> extends MSAction {
    label<R = unknown>(): R;
    openCloudPreferences<R = void, P0 = unknown>(_openCloudPreferences: P0): R;
  }
  namespace MSOpenCloudPreferencesAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction {
      alloc<R = MSOpenCloudPreferencesAction>(): R;
      new: <R = MSOpenCloudPreferencesAction>() => R;
    }
  }
}

declare const MSOpenCloudPreferencesAction: cocoa.MSOpenCloudPreferencesAction.CLASS;
