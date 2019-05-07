/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutGuide<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol, NSUserInterfaceItemIdentificationProtocol {}
  namespace NSLayoutGuide {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol, NSUserInterfaceItemIdentificationProtocol {
      alloc<R = NSLayoutGuide>(): R;
      new: <R = NSLayoutGuide>() => R;
      _allowingStaleFramesPerformBlock<R = void, P0 = CDUnknownBlockType>(__allowingStaleFramesPerformBlock: P0): R;
    }
  }
}

declare const NSLayoutGuide: cocoa.NSLayoutGuide.CLASS;
