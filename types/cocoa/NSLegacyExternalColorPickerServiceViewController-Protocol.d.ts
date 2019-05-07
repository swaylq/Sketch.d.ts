/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLegacyExternalColorPickerServiceViewControllerProtocol<T0 = void, T1 = void, T2 = void> {
    loadAndAddColorPickerContentView<R = void>(): R;
    supportsMode_reply<R = void, P0 = number, P1 = CDUnknownBlockType>(_supportsMode: P0, _reply: P1): R;
    detachColorList<R = void, P0 = NSColorList>(_detachColorList: P0): R;
    attachColorList<R = void, P0 = NSColorList>(_attachColorList: P0): R;
    alphaControlToggled<R = void, P0 = boolean>(_alphaControlToggled: P0): R;
    setMode<R = void, P0 = number>(_setMode: P0): R;
    setColor<R = void, P0 = NSColor>(_setColor: P0): R;
  }
  namespace NSLegacyExternalColorPickerServiceViewControllerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
