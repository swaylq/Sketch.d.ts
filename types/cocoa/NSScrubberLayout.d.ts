/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberLayout<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {}
  namespace NSScrubberLayout {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSScrubberLayout>(): R;
      new: <R = NSScrubberLayout>() => R;
      layoutAttributesClass<R = unknown>(): R;
    }
  }
}

declare const NSScrubberLayout: cocoa.NSScrubberLayout.CLASS;
