/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerEnumerator<T0 = void, T1 = void, T2 = void> extends NSEnumerator {
    cxx_destruct<R = void>(): R;
    skipDescendants<R = void>(): R;
    nextObject<R = unknown>(): R;
    initWithLayer_options<R = unknown, P0 = unknown, P1 = number>(_initWithLayer: P0, _options: P1): R;
  }
  namespace MSLayerEnumerator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEnumerator {}
  }
}

declare const MSLayerEnumerator: cocoa.MSLayerEnumerator.CLASS;
