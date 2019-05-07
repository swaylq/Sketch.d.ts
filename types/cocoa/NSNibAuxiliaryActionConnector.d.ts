/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibAuxiliaryActionConnector<T0 = void, T1 = void, T2 = void> extends NSNibConnector {
    trigger<R = NSString>(): R;
    setTrigger<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSNibAuxiliaryActionConnector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSNibConnector {
      alloc<R = NSNibAuxiliaryActionConnector>(): R;
      new: <R = NSNibAuxiliaryActionConnector>() => R;
      classFallbacksForKeyedArchiver<R = unknown>(): R;
    }
  }
}

declare const NSNibAuxiliaryActionConnector: cocoa.NSNibAuxiliaryActionConnector.CLASS;
