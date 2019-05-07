/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerBuilder<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSLayerBuilder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSLayerBuilder>(): R;
      new: <R = MSLayerBuilder>() => R;
      layerTreeWithContentsOfURL_error<R = unknown, P0 = unknown, P1 = unknown>(_layerTreeWithContentsOfURL: P0, _error: P1): R;
      layerTreeWithDictionary<R = unknown, P0 = unknown>(_layerTreeWithDictionary: P0): R;
      styleFromDictionary<R = unknown, P0 = unknown>(_styleFromDictionary: P0): R;
      layerTreeWithJSON_relativeToURL_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_layerTreeWithJSON: P0, _relativeToURL: P1, _error: P2): R;
    }
  }
}

declare const MSLayerBuilder: cocoa.MSLayerBuilder.CLASS;
