/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddRemoteLibraryAction<T0 = void, T1 = void, T2 = void> extends MSAction {
    label<R = unknown>(): R;
    displayDuplicateAlertSheetForRemoteAssetLibrary<R = void, P0 = unknown>(_displayDuplicateAlertSheetForRemoteAssetLibrary: P0): R;
    startDownloadingLibrary<R = void, P0 = unknown>(_startDownloadingLibrary: P0): R;
    addAppcastURL<R = void, P0 = unknown>(_addAppcastURL: P0): R;
    addCloudLibraryWithID<R = void, P0 = unknown>(_addCloudLibraryWithID: P0): R;
  }
  namespace MSAddRemoteLibraryAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction {
      alloc<R = MSAddRemoteLibraryAction>(): R;
      new: <R = MSAddRemoteLibraryAction>() => R;
    }
  }
}

declare const MSAddRemoteLibraryAction: cocoa.MSAddRemoteLibraryAction.CLASS;
