/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportStackView<T0 = void, T1 = void, T2 = void> extends MSStackView {}
  namespace MSExportStackView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStackView {
      alloc<R = MSExportStackView>(): R;
      new: <R = MSExportStackView>() => R;
    }
  }
}

declare const MSExportStackView: cocoa.MSExportStackView.CLASS;
