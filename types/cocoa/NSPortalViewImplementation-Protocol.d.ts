/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPortalViewImplementationProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    sourceView<R = NSView>(): R;
    setSourceView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace NSPortalViewImplementationProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
