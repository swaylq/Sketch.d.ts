/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOrderedSet<T0 = void, T1 = void, T2 = void> {
    // + NSOrderedSet(NSKeyValueCoding): 
    valueForKeyPath<R = unknown, P0 = unknown>(_valueForKeyPath: P0): R;
    setValue_forKey<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKey: P1): R;
    valueForKey<R = unknown, P0 = unknown>(_valueForKey: P0): R;
    _minForKeyPath<R = unknown, P0 = unknown>(__minForKeyPath: P0): R;
    _maxForKeyPath<R = unknown, P0 = unknown>(__maxForKeyPath: P0): R;
    _countForKeyPath<R = unknown, P0 = unknown>(__countForKeyPath: P0): R;
    _avgForKeyPath<R = unknown, P0 = unknown>(__avgForKeyPath: P0): R;
    _sumForKeyPath<R = unknown, P0 = unknown>(__sumForKeyPath: P0): R;
    // + NSOrderedSet(NSKeyValueCodingPrivate): 
    _validateValue_forKeyPath_ofObjectAtIndex_error<R = boolean, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(__validateValue: P0, _forKeyPath: P1, _ofObjectAtIndex: P2, _error: P3): R;
    _setValue_forKeyPath_ofObjectAtIndex<R = void, P0 = unknown, P1 = unknown, P2 = number>(__setValue: P0, _forKeyPath: P1, _ofObjectAtIndex: P2): R;
    _mutableSetValueForKeyPath_ofObjectAtIndex<R = unknown, P0 = unknown, P1 = number>(__mutableSetValueForKeyPath: P0, _ofObjectAtIndex: P1): R;
    _mutableOrderedSetValueForKeyPath_ofObjectAtIndex<R = unknown, P0 = unknown, P1 = number>(__mutableOrderedSetValueForKeyPath: P0, _ofObjectAtIndex: P1): R;
    _mutableArrayValueForKeyPath_ofObjectAtIndex<R = unknown, P0 = unknown, P1 = number>(__mutableArrayValueForKeyPath: P0, _ofObjectAtIndex: P1): R;
    _valueForKeyPath_ofObjectAtIndex<R = unknown, P0 = unknown, P1 = number>(__valueForKeyPath: P0, _ofObjectAtIndex: P1): R;
    // + NSOrderedSet(NSKeyValueObserverRegistration): 
    removeObserver_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_removeObserver: P0, _forKeyPath: P1): R;
    removeObserver_forKeyPath_context<R = void, P0 = unknown, P1 = unknown, P2 = void>(_removeObserver: P0, _forKeyPath: P1, _context: P2): R;
    addObserver_forKeyPath_options_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = void>(_addObserver: P0, _forKeyPath: P1, _options: P2, _context: P3): R;
    // + NSOrderedSet(NSKeyValueSorting): 
    sortedArrayUsingDescriptors<R = unknown, P0 = unknown>(_sortedArrayUsingDescriptors: P0): R;
    // + NSOrderedSet(NSOrderedSet): 
    classForCoder<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    // + NSOrderedSet(NSPredicateSupport): 
    filteredOrderedSetUsingPredicate<R = unknown, P0 = unknown>(_filteredOrderedSetUsingPredicate: P0): R;
    // + NSOrderedSet(MochaAdditions): 
    mo_objectForIndexedSubscript<R = unknown, P0 = NSUInteger>(_mo_objectForIndexedSubscript: P0): R;
  }
  namespace NSOrderedSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSOrderedSet(NSOrderedSet): 
      supportsSecureCoding<R = boolean>(): R;
    }
  }
}

declare const NSOrderedSet: cocoa.NSOrderedSet.CLASS;
