/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SCKObject<T0 = void, T1 = void, T2 = void> {
    // + SCKObject(Representable):
    localizedUpdatedTimeComponentsString<R = NSString>(): R;
  }
  namespace SCKObject {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const SCKObject: cocoa.SCKObject.CLASS;
