/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGridConstructor<T = any> extends cocoa.NSObject {
    duplicateLayers<R = unknown, P0 = unknown>(_duplicateLayers: P0): R;
    makeAllLayers<R = unknown, P0 = unknown>(_makeAllLayers: P0): R;
    distributionRectForLayer<R = cocoa.CGRect, P0 = unknown>(_distributionRectForLayer: P0): R;
    largestDistributionHeightInLayers<R = number, P0 = unknown>(_largestDistributionHeightInLayers: P0): R;
    sizeForLayer<R = cocoa.CGSize, P0 = unknown>(_sizeForLayer: P0): R;
    makeGridWithLayers_options<R = void, P0 = unknown, P1 = unknown>(_makeGridWithLayers: P0, _options: P1): R;
    options<R = unknown>(): R;
    setOptions<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface MSGridConstructor<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSGridConstructor>(): R;
      new: <R = MSGridConstructor>() => R;
    }
  }
}

declare const MSGridConstructor: cocoa.classes.MSGridConstructor;
