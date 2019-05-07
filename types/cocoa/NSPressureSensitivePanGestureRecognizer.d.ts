/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPressureSensitivePanGestureRecognizer<T0 = void, T1 = void, T2 = void> extends NSPanGestureRecognizer, NSCodingProtocol {
    _updatePropertiesWithEvent<R = void, P0 = unknown>(__updatePropertiesWithEvent: P0): R;
    _setHasCustomDefaultPressure<R = void, P0 = boolean>(__setHasCustomDefaultPressure: P0): R;
    _hasCustomDefaultPressure<R = boolean>(): R;
    pressure<R = number>(): R;
    defaultPressure<R = number>(): R;
    setDefaultPressure<R = void, P0 = number>(_v: P0): R;
    recognizesOnPressureChange<R = boolean>(): R;
    setRecognizesOnPressureChange<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSPressureSensitivePanGestureRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanGestureRecognizer, NSCodingProtocol {
      alloc<R = NSPressureSensitivePanGestureRecognizer>(): R;
      new: <R = NSPressureSensitivePanGestureRecognizer>() => R;
    }
  }
}

declare const NSPressureSensitivePanGestureRecognizer: cocoa.NSPressureSensitivePanGestureRecognizer.CLASS;
