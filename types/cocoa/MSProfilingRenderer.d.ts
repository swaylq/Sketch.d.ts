/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSProfilingRenderer<T0 = void, T1 = void, T2 = void> extends NSObject, MSAllRenderersProtocol {
    cxx_destruct<R = void>(): R;
    forwardInvocation<R = void, P0 = unknown>(_forwardInvocation: P0): R;
    initWithBaseRenderer_profilingDelegate_isGroup_label<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean, P3 = unknown>(_initWithBaseRenderer: P0, _profilingDelegate: P1, _isGroup: P2, _label: P3): R;
    label<R = NSString>(): R;
    isGroup<R = boolean>(): R;
    profilingDelegate<R = MSProfilingRendererDelegate>(): R;
    baseRenderer<R = MSRenderer>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSProfilingRenderer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSAllRenderersProtocol {
      alloc<R = MSProfilingRenderer>(): R;
      new: <R = MSProfilingRenderer>() => R;
    }
  }
}

declare const MSProfilingRenderer: cocoa.MSProfilingRenderer.CLASS;
