/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableGraphicsContextSettings<T = any> extends _MSImmutableGraphicsContextSettings {
    CGBlendMode<R = number>(): R;
    shouldChangeGraphicsContext<R = boolean>(): R;
  }
  namespace classes {
    export interface MSImmutableGraphicsContextSettings<T = any> extends _MSImmutableGraphicsContextSettings {
      alloc<R = MSImmutableGraphicsContextSettings>(): R;
      new: <R = MSImmutableGraphicsContextSettings>() => R;
    }
  }
}

declare const MSImmutableGraphicsContextSettings: cocoa.classes.MSImmutableGraphicsContextSettings;