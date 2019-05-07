/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideValue<T0 = void, T1 = void, T2 = void> extends _MSOverrideValue {
    hash<R = number>(): R;
    addPredecessor<R = void, P0 = unknown>(_addPredecessor: P0): R;
    description<R = unknown>(): R;
    initWithName_value<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _value: P1): R;
    predecessor<R = MSOverrideValue>(): R;
    setPredecessor<R = void, P0 = MSOverrideValue>(_v: P0): R;
    isInherited<R = boolean>(): R;
    setIsInherited<R = void, P0 = boolean>(_v: P0): R;
    attributeName<R = NSString>(): R;
  }
  namespace MSOverrideValue {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSOverrideValue {
      alloc<R = MSOverrideValue>(): R;
      new: <R = MSOverrideValue>() => R;
    }
  }
}

declare const MSOverrideValue: cocoa.MSOverrideValue.CLASS;
