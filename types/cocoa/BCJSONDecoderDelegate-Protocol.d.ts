/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCJSONDecoderDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    decoder_shouldInstantiateObjectOfClass<R = boolean, P0 = BCJSONDecoder, P1 = unknown>(_decoder: P0, _shouldInstantiateObjectOfClass: P1): R;
  }
  namespace BCJSONDecoderDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
