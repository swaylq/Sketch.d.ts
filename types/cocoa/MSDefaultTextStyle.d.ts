/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDefaultTextStyle<T0 = void, T1 = void, T2 = void> extends MSDefaultArchive {}
  namespace MSDefaultTextStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDefaultArchive {
      setDefaultTextStyle<R = void, P0 = unknown>(_setDefaultTextStyle: P0): R;
      defaultTextStyle<R = unknown>(): R;
      recordTextStyleForLayer<R = void, P0 = unknown>(_recordTextStyleForLayer: P0): R;
    }
  }
}

declare const MSDefaultTextStyle: cocoa.MSDefaultTextStyle.CLASS;
