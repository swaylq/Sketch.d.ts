/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModelObjectCommonProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    objectID<R = NSString>(): R;
  }
  namespace MSModelObjectCommonProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
