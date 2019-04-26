/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSortDescriptor<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
    _isEqualToSortDescriptor<R = boolean, P0 = unknown>(__isEqualToSortDescriptor: P0): R;
    compareObject_toObject<R = number, P0 = unknown, P1 = unknown>(_compareObject: P0, _toObject: P1): R;
    description<R = unknown>(): R;
    _selectorName<R = unknown>(): R;
    _setSelectorName<R = void, P0 = unknown>(__setSelectorName: P0): R;
    _setAscending<R = void, P0 = boolean>(__setAscending: P0): R;
    _setKey<R = void, P0 = unknown>(__setKey: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    _disallowEvaluation<R = void>(): R;
    allowEvaluation<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    dealloc<R = void>(): R;
    initWithKey_ascending_comparator<R = unknown, P0 = unknown, P1 = boolean, P2 = CDUnknownBlockType>(_initWithKey: P0, _ascending: P1, _comparator: P2): R;
    initWithKey_ascending_selector<R = unknown, P0 = unknown, P1 = boolean, P2 = string>(_initWithKey: P0, _ascending: P1, _selector: P2): R;
    initWithKey_ascending<R = unknown, P0 = unknown, P1 = boolean>(_initWithKey: P0, _ascending: P1): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    reversedSortDescriptor<R = unknown>(): R;
    comparator<R = CDUnknownBlockType>(): R;
    selector<R = string>(): R;
    ascending<R = boolean>(): R;
    key<R = NSString>(): R;
  }
  namespace NSSortDescriptor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
      alloc<R = NSSortDescriptor>(): R;
      new: <R = NSSortDescriptor>() => R;
      _defaultSelectorName<R = unknown>(): R;
      sortDescriptorWithKey_ascending_comparator<R = unknown, P0 = unknown, P1 = boolean, P2 = CDUnknownBlockType>(_sortDescriptorWithKey: P0, _ascending: P1, _comparator: P2): R;
      sortDescriptorWithKey_ascending_selector<R = unknown, P0 = unknown, P1 = boolean, P2 = string>(_sortDescriptorWithKey: P0, _ascending: P1, _selector: P2): R;
      sortDescriptorWithKey_ascending<R = unknown, P0 = unknown, P1 = boolean>(_sortDescriptorWithKey: P0, _ascending: P1): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSSortDescriptor: cocoa.NSSortDescriptor.CLASS;
