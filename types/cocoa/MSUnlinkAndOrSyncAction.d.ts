/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUnlinkAndOrSyncAction<T0 = void, T1 = void, T2 = void> extends MSBaseSharedObjectAction {}
  namespace MSUnlinkAndOrSyncAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseSharedObjectAction {
      alloc<R = MSUnlinkAndOrSyncAction>(): R;
      new: <R = MSUnlinkAndOrSyncAction>() => R;
    }
  }
}

declare const MSUnlinkAndOrSyncAction: cocoa.MSUnlinkAndOrSyncAction.CLASS;
