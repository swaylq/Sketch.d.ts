/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFalsePredicate<T = any> extends NSPredicate {
    predicateFormat<R = unknown>(): R;
    hash<R = number>(): R;
  }
  namespace classes {
    export interface NSFalsePredicate<T = any> extends NSPredicate {
      alloc<R = NSFalsePredicate>(): R;
      new: <R = NSFalsePredicate>() => R;
      defaultInstance<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSFalsePredicate: cocoa.classes.NSFalsePredicate;