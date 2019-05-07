/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibFinishedLoadingDependentProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    _finishedLoadingNibDependencies<R = void>(): R;
    _nibLoadingDependencies<R = NSArray>(): R;
  }
  namespace NSNibFinishedLoadingDependentProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
