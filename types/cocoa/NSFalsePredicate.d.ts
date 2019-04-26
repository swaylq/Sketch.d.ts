/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFalsePredicate<T0 = void, T1 = void, T2 = void> extends NSPredicate {
    predicateFormat<R = unknown>(): R;
    hash<R = number>(): R;
  }
  namespace NSFalsePredicate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPredicate {
      alloc<R = NSFalsePredicate>(): R;
      new: <R = NSFalsePredicate>() => R;
      defaultInstance<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSFalsePredicate: cocoa.NSFalsePredicate.CLASS;
