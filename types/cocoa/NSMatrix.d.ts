/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMatrix<T0 = void, T1 = void, T2 = void> extends NSControl, NSUserInterfaceValidationsProtocol, NSViewToolTipOwnerProtocol {}
  namespace NSMatrix {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl, NSUserInterfaceValidationsProtocol, NSViewToolTipOwnerProtocol {
      alloc<R = NSMatrix>(): R;
      new: <R = NSMatrix>() => R;
    }
  }
}

declare const NSMatrix: cocoa.NSMatrix.CLASS;
