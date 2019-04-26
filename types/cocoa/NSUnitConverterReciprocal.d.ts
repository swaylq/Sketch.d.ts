/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitConverterReciprocal<T0 = void, T1 = void, T2 = void> extends NSUnitConverter, NSSecureCodingProtocol {
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    description<R = unknown>(): R;
    initWithReciprocalValue<R = unknown, P0 = number>(_initWithReciprocalValue: P0): R;
    reciprocalValue<R = number>(): R;
  }
  namespace NSUnitConverterReciprocal {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSUnitConverter, NSSecureCodingProtocol {
      alloc<R = NSUnitConverterReciprocal>(): R;
      new: <R = NSUnitConverterReciprocal>() => R;
    }
  }
}

declare const NSUnitConverterReciprocal: cocoa.NSUnitConverterReciprocal.CLASS;
