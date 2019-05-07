/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModelResources<T0 = void, T1 = void, T2 = void> extends BCSingleton {
    cxx_destruct<R = void>(): R;
    resourcesNeedingMigration<R = unknown>(): R;
    loadNoiseImageWithIndex<R = unknown, P0 = number>(_loadNoiseImageWithIndex: P0): R;
    loadImageWithName<R = unknown, P0 = unknown>(_loadImageWithName: P0): R;
    preloadResources<R = void>(): R;
    URLForResource_withExtension<R = unknown, P0 = unknown, P1 = unknown>(_URLForResource: P0, _withExtension: P1): R;
    URLForImageResource<R = unknown, P0 = unknown>(_URLForImageResource: P0): R;
    errorPattern<R = NSBitmapImageRep>(): R;
    setErrorPattern<R = void, P0 = NSBitmapImageRep>(_v: P0): R;
    noiseImages<R = NSArray>(): R;
    setNoiseImages<R = void, P0 = NSArray>(_v: P0): R;
    bundle<R = NSBundle>(): R;
    setBundle<R = void, P0 = NSBundle>(_v: P0): R;
  }
  namespace MSModelResources {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCSingleton {}
  }
}

declare const MSModelResources: cocoa.MSModelResources.CLASS;
