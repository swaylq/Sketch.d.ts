/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAttributeConverter<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    convertAttributes<R = unknown, P0 = unknown>(_convertAttributes: P0): R;
    initWithAttributeName_block<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_initWithAttributeName: P0, _block: P1): R;
    conversionBlock<R = CDUnknownBlockType>(): R;
    attributeName<R = NSString>(): R;
  }
  namespace MSAttributeConverter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSAttributeConverter>(): R;
      new: <R = MSAttributeConverter>() => R;
      converterWithAttributeName_block<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_converterWithAttributeName: P0, _block: P1): R;
    }
  }
}

declare const MSAttributeConverter: cocoa.MSAttributeConverter.CLASS;
