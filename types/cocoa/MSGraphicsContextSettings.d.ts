/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGraphicsContextSettings<T0 = void, T1 = void, T2 = void> extends _MSGraphicsContextSettings {
    description<R = unknown>(): R;
  }
  namespace MSGraphicsContextSettings {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSGraphicsContextSettings {
      alloc<R = MSGraphicsContextSettings>(): R;
      new: <R = MSGraphicsContextSettings>() => R;
    }
  }
}

declare const MSGraphicsContextSettings: cocoa.MSGraphicsContextSettings.CLASS;
