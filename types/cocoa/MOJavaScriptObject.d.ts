/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOJavaScriptObject<T0 = void, T1 = void, T2 = void> extends NSObject {
    JSObject<R = JSObjectRef>(): R;
    JSContext<R = JSContextRef>(): R;
  }
  namespace MOJavaScriptObject {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MOJavaScriptObject>(): R;
      new: <R = MOJavaScriptObject>() => R;
      objectWithJSObject_context<R = MOJavaScriptObject, P0 = JSObjectRef, P1 = JSContextRef>(_objectWithJSObject: P0, _context: P1): R;
    }
  }
}

declare const MOJavaScriptObject: cocoa.MOJavaScriptObject.CLASS;
