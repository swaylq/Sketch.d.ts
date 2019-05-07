/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUnlinkAndSyncFromLibraryAction<T0 = void, T1 = void, T2 = void> extends MSUnlinkAndOrSyncAction {
    label<R = unknown>(): R;
    needsRenameAfterAction<R = boolean>(): R;
    unlinkAndSyncFromLibrary<R = void, P0 = unknown>(_unlinkAndSyncFromLibrary: P0): R;
  }
  namespace MSUnlinkAndSyncFromLibraryAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSUnlinkAndOrSyncAction {
      alloc<R = MSUnlinkAndSyncFromLibraryAction>(): R;
      new: <R = MSUnlinkAndSyncFromLibraryAction>() => R;
    }
  }
}

declare const MSUnlinkAndSyncFromLibraryAction: cocoa.MSUnlinkAndSyncFromLibraryAction.CLASS;
