/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSymbolInstance<T0 = void, T1 = void, T2 = void> extends MSStyledLayer {
    moveOverrideValueIndex_toIndex<R = void, P0 = number, P1 = number>(_moveOverrideValueIndex: P0, _toIndex: P1): R;
    removeAllOverrideValues<R = void>(): R;
    removeOverrideValuesAtIndexes<R = void, P0 = unknown>(_removeOverrideValuesAtIndexes: P0): R;
    removeOverrideValueAtIndex<R = void, P0 = number>(_removeOverrideValueAtIndex: P0): R;
    removeOverrideValue<R = void, P0 = unknown>(_removeOverrideValue: P0): R;
    insertOverrideValues_afterOverrideValue<R = void, P0 = unknown, P1 = unknown>(_insertOverrideValues: P0, _afterOverrideValue: P1): R;
    insertOverrideValue_afterOverrideValue<R = void, P0 = unknown, P1 = unknown>(_insertOverrideValue: P0, _afterOverrideValue: P1): R;
    insertOverrideValues_beforeOverrideValue<R = void, P0 = unknown, P1 = unknown>(_insertOverrideValues: P0, _beforeOverrideValue: P1): R;
    insertOverrideValue_beforeOverrideValue<R = void, P0 = unknown, P1 = unknown>(_insertOverrideValue: P0, _beforeOverrideValue: P1): R;
    insertOverrideValue_atIndex<R = void, P0 = unknown, P1 = number>(_insertOverrideValue: P0, _atIndex: P1): R;
    addOverrideValues<R = void, P0 = unknown>(_addOverrideValues: P0): R;
    addOverrideValue<R = void, P0 = unknown>(_addOverrideValue: P0): R;
    overrideValues<R = NSArray>(): R;
    setOverrideValues<R = void, P0 = NSArray>(_v: P0): R;
    verticalSpacing<R = number>(): R;
    setVerticalSpacing<R = void, P0 = number>(_v: P0): R;
    symbolID<R = NSString>(): R;
    setSymbolID<R = void, P0 = NSString>(_v: P0): R;
    scale<R = number>(): R;
    setScale<R = void, P0 = number>(_v: P0): R;
    horizontalSpacing<R = number>(): R;
    setHorizontalSpacing<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSSymbolInstance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStyledLayer {
      alloc<R = _MSSymbolInstance>(): R;
      new: <R = _MSSymbolInstance>() => R;
    }
  }
}
