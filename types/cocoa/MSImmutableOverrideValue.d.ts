/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableOverrideValue<T0 = void, T1 = void, T2 = void> extends _MSImmutableOverrideValue {
    description<R = unknown>(): R;
    calculateAttributeNameAndPath<R = void>(): R;
    initWithName_value<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _value: P1): R;
    path<R = NSString>(): R;
    attributeName<R = NSString>(): R;
  }
  namespace MSImmutableOverrideValue {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableOverrideValue {
      alloc<R = MSImmutableOverrideValue>(): R;
      new: <R = MSImmutableOverrideValue>() => R;
      overrideValuesFromDictionary<R = unknown, P0 = unknown>(_overrideValuesFromDictionary: P0): R;
      dictionaryFromOverrideValues<R = unknown, P0 = unknown>(_dictionaryFromOverrideValues: P0): R;
      overrideValuesFromDictionary_withPrefix<R = unknown, P0 = unknown, P1 = unknown>(_overrideValuesFromDictionary: P0, _withPrefix: P1): R;
    }
  }
}

declare const MSImmutableOverrideValue: cocoa.MSImmutableOverrideValue.CLASS;
