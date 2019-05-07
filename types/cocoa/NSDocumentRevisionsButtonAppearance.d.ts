/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsButtonAppearance<T0 = void, T1 = void, T2 = void> extends NSAppearance {
    allowsVibrancy<R = boolean>(): R;
  }
  namespace NSDocumentRevisionsButtonAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAppearance {
      alloc<R = NSDocumentRevisionsButtonAppearance>(): R;
      new: <R = NSDocumentRevisionsButtonAppearance>() => R;
    }
  }
}

declare const NSDocumentRevisionsButtonAppearance: cocoa.NSDocumentRevisionsButtonAppearance.CLASS;
