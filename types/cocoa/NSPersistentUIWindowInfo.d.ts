/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIWindowInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    recordEncryptionKey<R = string>(): R;
    dealloc<R = void>(): R;
    copyAllPublicProperties<R = unknown>(): R;
    setExternalPublicProperties<R = void, P0 = unknown>(_setExternalPublicProperties: P0): R;
    isGlobal<R = boolean>(): R;
    windowID<R = number>(): R;
    setWindowID<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSPersistentUIWindowInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPersistentUIWindowInfo>(): R;
      new: <R = NSPersistentUIWindowInfo>() => R;
    }
  }
}

declare const NSPersistentUIWindowInfo: cocoa.NSPersistentUIWindowInfo.CLASS;
