/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRGBColorValueFormatter<T0 = void, T1 = void, T2 = void> extends NSFormatter {
    _currentTransformer<R = unknown>(): R;
    _currentFormatter<R = unknown>(): R;
    initWithEntryMode<R = unknown, P0 = number>(_initWithEntryMode: P0): R;
    dealloc<R = void>(): R;
    entryMode<R = number>(): R;
  }
  namespace NSRGBColorValueFormatter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFormatter {
      alloc<R = NSRGBColorValueFormatter>(): R;
      new: <R = NSRGBColorValueFormatter>() => R;
      formatterForEntryMode<R = unknown, P0 = number>(_formatterForEntryMode: P0): R;
    }
  }
}

declare const NSRGBColorValueFormatter: cocoa.NSRGBColorValueFormatter.CLASS;
