/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingDriver<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    contextWithName_forCGContext_renderingRequest<R = unknown, P0 = unknown, P1 = CGContext, P2 = unknown>(_contextWithName: P0, _forCGContext: P1, _renderingRequest: P2): R;
    rendererForObject_protocol<R = unknown, P0 = unknown, P1 = unknown>(_rendererForObject: P0, _protocol: P1): R;
    addRenderersForSubclasses<R = void, P0 = unknown>(_addRenderersForSubclasses: P0): R;
    setupRendererMap<R = unknown>(): R;
    initWithSettings<R = unknown, P0 = unknown>(_initWithSettings: P0): R;
    createColorFromDefaultNamed<R = CGColor, P0 = unknown>(_createColorFromDefaultNamed: P0): R;
    renderers<R = NSMapTable>(): R;
    setRenderers<R = void, P0 = NSMapTable>(_v: P0): R;
    settings<R = MSRenderingDriverSettings>(): R;
  }
  namespace MSRenderingDriver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSRenderingDriver>(): R;
      new: <R = MSRenderingDriver>() => R;
    }
  }
}

declare const MSRenderingDriver: cocoa.MSRenderingDriver.CLASS;
