/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRGBColorValueTransformer<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {
    entryMode<R = number>(): R;
    setEntryMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSRGBColorValueTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {
      alloc<R = NSRGBColorValueTransformer>(): R;
      new: <R = NSRGBColorValueTransformer>() => R;
    }
  }
}

declare const NSRGBColorValueTransformer: cocoa.NSRGBColorValueTransformer.CLASS;
