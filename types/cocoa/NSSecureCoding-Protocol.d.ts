/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSecureCodingProtocol<T0 = void, T1 = void, T2 = void> {}
  namespace NSSecureCodingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      supportsSecureCoding<R = boolean>(): R;
    }
  }
}
