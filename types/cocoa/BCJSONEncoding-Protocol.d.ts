/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCJSONEncodingProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    initWithJSONDecoder<R = unknown, P0 = BCJSONDecoder>(_initWithJSONDecoder: P0): R;
    encodeAsJSON<R = void, P0 = BCJSONEncoder>(_encodeAsJSON: P0): R;
    replacementObjectForJSONEncoder<R = NSObject, P0 = BCJSONEncoder>(_replacementObjectForJSONEncoder: P0): R;
  }
  namespace BCJSONEncodingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
