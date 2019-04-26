/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKMessageCodingProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    initWithDictionary<R = unknown, P0 = NSDictionary>(_initWithDictionary: P0): R;
    dictionaryRepresentation<R = NSDictionary>(): R;
  }
  namespace SMKMessageCodingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
