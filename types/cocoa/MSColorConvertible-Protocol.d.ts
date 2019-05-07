/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorConvertibleProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    convertColorsUsing<R = void, P0 = MSColorConverter>(_convertColorsUsing: P0): R;
  }
  namespace MSColorConvertibleProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
