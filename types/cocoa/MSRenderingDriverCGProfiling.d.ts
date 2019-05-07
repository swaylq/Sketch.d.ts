/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingDriverCGProfiling<T0 = void, T1 = void, T2 = void> extends MSRenderingDriverCG {
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    delegate<R = MSProfilingRendererDelegate>(): R;
    traversalIndent<R = NSString>(): R;
    traversalLog<R = NSMutableString>(): R;
  }
  namespace MSRenderingDriverCGProfiling {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSRenderingDriverCG {
      alloc<R = MSRenderingDriverCGProfiling>(): R;
      new: <R = MSRenderingDriverCGProfiling>() => R;
    }
  }
}

declare const MSRenderingDriverCGProfiling: cocoa.MSRenderingDriverCGProfiling.CLASS;
