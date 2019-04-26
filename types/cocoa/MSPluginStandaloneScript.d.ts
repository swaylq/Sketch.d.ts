/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginStandaloneScript<T0 = void, T1 = void, T2 = void> extends MSPluginScript {
    script<R = unknown>(): R;
    wrappedScript<R = NSString>(): R;
    setWrappedScript<R = void, P0 = NSString>(_v: P0): R;
    handler<R = NSString>(): R;
    rawScript<R = NSString>(): R;
  }
  namespace MSPluginStandaloneScript {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPluginScript {
      alloc<R = MSPluginStandaloneScript>(): R;
      new: <R = MSPluginStandaloneScript>() => R;
      wrappedScript_handler<R = unknown, P0 = unknown, P1 = unknown>(_wrappedScript: P0, _handler: P1): R;
    }
  }
}

declare const MSPluginStandaloneScript: cocoa.MSPluginStandaloneScript.CLASS;
