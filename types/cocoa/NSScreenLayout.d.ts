/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScreenLayout<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
    description<R = unknown>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    dealloc<R = void>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    initWithScreen<R = unknown, P0 = unknown>(_initWithScreen: P0): R;
    hash<R = number>(): R;
    size<R = CGSize>(): R;
    UUIDString<R = NSString>(): R;
  }
  namespace NSScreenLayout {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSScreenLayout>(): R;
      new: <R = NSScreenLayout>() => R;
      layoutWithScreen<R = unknown, P0 = unknown>(_layoutWithScreen: P0): R;
    }
  }
}

declare const NSScreenLayout: cocoa.NSScreenLayout.CLASS;
