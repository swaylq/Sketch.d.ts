/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUnlinkFromLibraryAction<T0 = void, T1 = void, T2 = void> extends MSUnlinkAndOrSyncAction {
    label<R = unknown>(): R;
    needsRenameAfterAction<R = boolean>(): R;
    unlinkFromLibrary<R = void, P0 = unknown>(_unlinkFromLibrary: P0): R;
  }
  namespace MSUnlinkFromLibraryAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSUnlinkAndOrSyncAction {
      alloc<R = MSUnlinkFromLibraryAction>(): R;
      new: <R = MSUnlinkFromLibraryAction>() => R;
    }
  }
}

declare const MSUnlinkFromLibraryAction: cocoa.MSUnlinkFromLibraryAction.CLASS;
