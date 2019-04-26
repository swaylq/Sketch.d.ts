/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorConverterProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    shouldConvertImmutableColor<R = boolean, P0 = MSImmutableColor>(_shouldConvertImmutableColor: P0): R;
    shouldConvertColor<R = boolean, P0 = MSColor>(_shouldConvertColor: P0): R;
    convertImmutableColor<R = MSImmutableColor, P0 = MSImmutableColor>(_convertImmutableColor: P0): R;
    convertColor<R = MSColor, P0 = MSColor>(_convertColor: P0): R;
  }
  namespace MSColorConverterProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
