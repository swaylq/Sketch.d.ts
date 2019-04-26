/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCellMouseTrackingInfo<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSCellMouseTrackingInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSCellMouseTrackingInfo>(): R;
      new: <R = NSCellMouseTrackingInfo>() => R;
    }
  }
}

declare const NSCellMouseTrackingInfo: cocoa.NSCellMouseTrackingInfo.CLASS;
