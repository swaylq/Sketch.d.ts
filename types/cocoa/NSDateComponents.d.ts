/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDateComponents<T0 = void, T1 = void, T2 = void> {
    // + NSDateComponents(_): 
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
  }
  namespace NSDateComponents {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const NSDateComponents: cocoa.NSDateComponents.CLASS;
