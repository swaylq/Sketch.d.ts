/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickingInternalProtocol<T0 = void, T1 = void, T2 = void> extends NSColorPickingCustomProtocol {
    pickerIdentifier<R = NSString>(): R;
    isActivePicker<R = boolean>(): R;
    setIsActivePicker<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSColorPickingInternalProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColorPickingCustomProtocol {}
  }
}
