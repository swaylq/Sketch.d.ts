/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStyleColorControls<T0 = void, T1 = void, T2 = void> extends _MSImmutableStyleColorControls {
    renderBitmapEffects<R = unknown, P0 = unknown>(_renderBitmapEffects: P0): R;
    // + MSImmutableStyleColorControls(CoreImageEffects): 
    renderBitmapEffects<R = unknown, P0 = unknown>(_renderBitmapEffects: P0): R;
  }
  namespace MSImmutableStyleColorControls {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableStyleColorControls {
      alloc<R = MSImmutableStyleColorControls>(): R;
      new: <R = MSImmutableStyleColorControls>() => R;
  
  }
  }
}

declare const MSImmutableStyleColorControls: cocoa.MSImmutableStyleColorControls.CLASS;
