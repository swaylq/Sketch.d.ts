/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSyncLocalStyleAction<T0 = void, T1 = void, T2 = void> extends MSUnlinkAndOrSyncAction {
    label<R = unknown>(): R;
    syncLocalSharedStyle<R = void, P0 = unknown>(_syncLocalSharedStyle: P0): R;
  }
  namespace MSSyncLocalStyleAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSUnlinkAndOrSyncAction {
      alloc<R = MSSyncLocalStyleAction>(): R;
      new: <R = MSSyncLocalStyleAction>() => R;
    }
  }
}

declare const MSSyncLocalStyleAction: cocoa.MSSyncLocalStyleAction.CLASS;
