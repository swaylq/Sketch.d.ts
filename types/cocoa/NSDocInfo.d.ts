/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocInfo<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    copy<R = unknown>(): R;
    initWithFileAttributes<R = unknown, P0 = unknown>(_initWithFileAttributes: P0): R;
    initFromInfo<R = unknown, P0 = stat>(_initFromInfo: P0): R;
  }
  namespace NSDocInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSDocInfo>(): R;
      new: <R = NSDocInfo>() => R;
    }
  }
}

declare const NSDocInfo: cocoa.NSDocInfo.CLASS;
