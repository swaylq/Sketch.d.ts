/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickingCustomProtocol<T0 = void, T1 = void, T2 = void> extends NSColorPickingDefaultProtocol {
    setColor<R = void, P0 = NSColor>(_setColor: P0): R;
    provideNewView<R = NSView, P0 = boolean>(_provideNewView: P0): R;
    currentMode<R = number>(): R;
    supportsMode<R = boolean, P0 = number>(_supportsMode: P0): R;
  }
  namespace NSColorPickingCustomProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColorPickingDefaultProtocol {}
  }
}
