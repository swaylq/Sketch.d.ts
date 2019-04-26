/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAnimationInfo<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    dealloc<R = void>(): R;
  }
  namespace NSAnimationInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSAnimationInfo>(): R;
      new: <R = NSAnimationInfo>() => R;
    }
  }
}

declare const NSAnimationInfo: cocoa.NSAnimationInfo.CLASS;
