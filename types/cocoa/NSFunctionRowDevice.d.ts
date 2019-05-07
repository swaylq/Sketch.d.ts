/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFunctionRowDevice<T0 = void, T1 = void, T2 = void> extends NSObject {
    touchDevice<R = NSTouchDevice>(): R;
    frame<R = CGRect>(): R;
  }
  namespace NSFunctionRowDevice {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFunctionRowDevice>(): R;
      new: <R = NSFunctionRowDevice>() => R;
      deviceDimmed<R = boolean>(): R;
      defaultFunctionRowDevice<R = unknown>(): R;
      functionRowDevices<R = unknown>(): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSFunctionRowDevice: cocoa.NSFunctionRowDevice.CLASS;
