/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarProviderProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    touchBar<R = NSTouchBar>(): R;
  }
  namespace NSTouchBarProviderProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
