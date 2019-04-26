/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTransparencyLayerSavedState<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    shouldFlip<R = boolean>(): R;
    setShouldFlip<R = void, P0 = boolean>(_v: P0): R;
    deviceRect<R = CGRect>(): R;
    setDeviceRect<R = void, P0 = CGRect>(_v: P0): R;
    contextRef<R = CGContext>(): R;
    setContextRef<R = void, P0 = CGContext>(_v: P0): R;
    graphicsContext<R = NSGraphicsContext>(): R;
    setGraphicsContext<R = void, P0 = NSGraphicsContext>(_v: P0): R;
  }
  namespace MSTransparencyLayerSavedState {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSTransparencyLayerSavedState>(): R;
      new: <R = MSTransparencyLayerSavedState>() => R;
    }
  }
}

declare const MSTransparencyLayerSavedState: cocoa.MSTransparencyLayerSavedState.CLASS;
