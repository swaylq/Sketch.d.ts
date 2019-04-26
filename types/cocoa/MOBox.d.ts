/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOBox<T0 = void, T1 = void, T2 = void> extends NSObject {
    representedObject<R = unknown>(): R;
    setRepresentedObject<R = void, P0 = unknown>(_v: P0): R;
    JSObject<R = JSObjectRef>(): R;
    setJSObject<R = void, P0 = JSObjectRef>(_v: P0): R;
    runtime<R = Mocha>(): R;
    setRuntime<R = void, P0 = Mocha>(_v: P0): R;
  }
  namespace MOBox {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MOBox>(): R;
      new: <R = MOBox>() => R;
    }
  }
}

declare const MOBox: cocoa.MOBox.CLASS;
