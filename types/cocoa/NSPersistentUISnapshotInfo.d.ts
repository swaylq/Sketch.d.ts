/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUISnapshotInfo<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSPersistentUISnapshotInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPersistentUISnapshotInfo>(): R;
      new: <R = NSPersistentUISnapshotInfo>() => R;
    }
  }
}

declare const NSPersistentUISnapshotInfo: cocoa.NSPersistentUISnapshotInfo.CLASS;
