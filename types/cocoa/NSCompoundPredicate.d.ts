/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCompoundPredicate<T0 = void, T1 = void, T2 = void> extends NSPredicate {
    predicateOperator<R = unknown>(): R;
    _acceptSubpredicates_flags<R = void, P0 = unknown, P1 = number>(__acceptSubpredicates: P0, _flags: P1): R;
    hash<R = number>(): R;
    predicateFormat<R = unknown>(): R;
    _subpredicateDescription<R = unknown, P0 = unknown>(__subpredicateDescription: P0): R;
    _predicateOperator<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithType_subpredicates<R = unknown, P0 = number, P1 = unknown>(_initWithType: P0, _subpredicates: P1): R;
    subpredicates<R = NSArray>(): R;
    compoundPredicateType<R = number>(): R;
  }
  namespace NSCompoundPredicate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPredicate {
      alloc<R = NSCompoundPredicate>(): R;
      new: <R = NSCompoundPredicate>() => R;
      _operatorForType<R = unknown, P0 = number>(__operatorForType: P0): R;
      notPredicateWithSubpredicate<R = unknown, P0 = unknown>(_notPredicateWithSubpredicate: P0): R;
      orPredicateWithSubpredicates<R = unknown, P0 = unknown>(_orPredicateWithSubpredicates: P0): R;
      andPredicateWithSubpredicates<R = unknown, P0 = unknown>(_andPredicateWithSubpredicates: P0): R;
    }
  }
}

declare const NSCompoundPredicate: cocoa.NSCompoundPredicate.CLASS;
