/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCalendar<T0 = void, T1 = void, T2 = void> {
    // + NSCalendar(NSCalendar): 
    classForCoder<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
  }
  namespace NSCalendar {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const NSCalendar: cocoa.NSCalendar.CLASS;
