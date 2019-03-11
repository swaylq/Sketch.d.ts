/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPressureSensitivePanGestureRecognizer<T = any> extends cocoa.NSPanGestureRecognizer, cocoa.NSCodingProtocol {
    _updatePropertiesWithEvent<R = void, P0 = unknown>(__updatePropertiesWithEvent: P0): R;
    _setHasCustomDefaultPressure<R = void, P0 = boolean>(__setHasCustomDefaultPressure: P0): R;
    _hasCustomDefaultPressure<R = boolean>(): R;
    pressure<R = number>(): R;
    defaultPressure<R = number>(): R;
    setDefaultPressure<R = void, P0 = number>(_v: P0): R;
    recognizesOnPressureChange<R = boolean>(): R;
    setRecognizesOnPressureChange<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSPressureSensitivePanGestureRecognizer<T = any> extends cocoa.classes.NSPanGestureRecognizer, cocoa.classes.NSCodingProtocol {
      alloc<R = NSPressureSensitivePanGestureRecognizer>(): R;
      new: <R = NSPressureSensitivePanGestureRecognizer>() => R;
    }
  }
}

declare const NSPressureSensitivePanGestureRecognizer: cocoa.classes.NSPressureSensitivePanGestureRecognizer;
