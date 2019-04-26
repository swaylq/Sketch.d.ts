/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewLayerContentScaleDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    layer_shouldInheritContentsScale_fromWindow<R = boolean, P0 = CALayer, P1 = number, P2 = NSWindow>(_layer: P0, _shouldInheritContentsScale: P1, _fromWindow: P2): R;
  }
  namespace NSViewLayerContentScaleDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
