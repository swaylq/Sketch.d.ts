/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableOverrideValue<T = any> extends cocoa._MSImmutableOverrideValue {
    description<R = unknown>(): R;
    calculateAttributeNameAndPath<R = void>(): R;
    initWithName_value<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _value: P1): R;
    path<R = cocoa.NSString>(): R;
    attributeName<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSImmutableOverrideValue<T = any> extends cocoa.classes._MSImmutableOverrideValue {
      alloc<R = MSImmutableOverrideValue>(): R;
      new: <R = MSImmutableOverrideValue>() => R;
      overrideValuesFromDictionary<R = unknown, P0 = unknown>(_overrideValuesFromDictionary: P0): R;
      dictionaryFromOverrideValues<R = unknown, P0 = unknown>(_dictionaryFromOverrideValues: P0): R;
      overrideValuesFromDictionary_withPrefix<R = unknown, P0 = unknown, P1 = unknown>(_overrideValuesFromDictionary: P0, _withPrefix: P1): R;
    }
  }
}

declare const MSImmutableOverrideValue: cocoa.classes.MSImmutableOverrideValue;
