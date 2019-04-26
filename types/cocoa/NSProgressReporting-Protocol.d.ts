/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressReportingProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    progress<R = NSProgress>(): R;
  }
  namespace NSProgressReportingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
