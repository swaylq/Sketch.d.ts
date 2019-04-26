/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableGraphicsContextSettings<T0 = void, T1 = void, T2 = void> extends _MSImmutableGraphicsContextSettings {
    CGBlendMode<R = number>(): R;
    shouldChangeGraphicsContext<R = boolean>(): R;
    // + MSImmutableGraphicsContextSettings(Rendering): 
    CGBlendMode<R = number>(): R;
    shouldChangeGraphicsContext<R = boolean>(): R;
  }
  namespace MSImmutableGraphicsContextSettings {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableGraphicsContextSettings {
      alloc<R = MSImmutableGraphicsContextSettings>(): R;
      new: <R = MSImmutableGraphicsContextSettings>() => R;
  
  }
  }
}

declare const MSImmutableGraphicsContextSettings: cocoa.MSImmutableGraphicsContextSettings.CLASS;
