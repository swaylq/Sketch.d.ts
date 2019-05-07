/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDataAsset<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    description<R = unknown>(): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    initWithName_bundle<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _bundle: P1): R;
    initWithName<R = unknown, P0 = unknown>(_initWithName: P0): R;
    typeIdentifier<R = NSString>(): R;
    data<R = NSData>(): R;
    name<R = NSString>(): R;
  }
  namespace NSDataAsset {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSDataAsset>(): R;
      new: <R = NSDataAsset>() => R;
    }
  }
}

declare const NSDataAsset: cocoa.NSDataAsset.CLASS;
