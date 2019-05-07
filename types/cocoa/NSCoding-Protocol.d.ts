/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCodingProtocol<T0 = void, T1 = void, T2 = void> {
    initWithCoder<R = unknown, P0 = NSCoder>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = NSCoder>(_encodeWithCoder: P0): R;
  }
  namespace NSCodingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
