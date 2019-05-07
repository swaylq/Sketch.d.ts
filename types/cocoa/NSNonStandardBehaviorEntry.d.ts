/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNonStandardBehaviorEntry<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    actualValue<R = NSValue>(): R;
    setActualValue<R = void, P0 = NSValue>(_v: P0): R;
    standardValue<R = NSValue>(): R;
    setStandardValue<R = void, P0 = NSValue>(_v: P0): R;
    reason<R = number>(): R;
    setReason<R = void, P0 = number>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSNonStandardBehaviorEntry {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSNonStandardBehaviorEntry>(): R;
      new: <R = NSNonStandardBehaviorEntry>() => R;
    }
  }
}

declare const NSNonStandardBehaviorEntry: cocoa.NSNonStandardBehaviorEntry.CLASS;
