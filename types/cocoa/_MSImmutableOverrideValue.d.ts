/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableOverrideValue<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    value<R = NSCopying>(): R;
    setValue<R = void, P0 = NSCopying>(_v: P0): R;
    overrideName<R = NSString>(): R;
    setOverrideName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace _MSImmutableOverrideValue {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
      alloc<R = _MSImmutableOverrideValue>(): R;
      new: <R = _MSImmutableOverrideValue>() => R;
    }
  }
}
