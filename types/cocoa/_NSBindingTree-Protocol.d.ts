/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBindingTreeProtocol<T0 = void, T1 = void, T2 = void> {
    isExpandableAtArrangedObjectIndexPath<R = boolean, P0 = NSIndexPath>(_isExpandableAtArrangedObjectIndexPath: P0): R;
    countForIndexPath<R = number, P0 = NSIndexPath>(_countForIndexPath: P0): R;
    nodeAtIndexPath<R = unknown, P0 = NSIndexPath>(_nodeAtIndexPath: P0): R;
    objectAtIndexPath<R = unknown, P0 = unknown>(_objectAtIndexPath: P0): R;
    _validateValue_forKeyPath_ofObjectAtIndexPath_error<R = boolean, P0 = unknown, P1 = NSString, P2 = NSIndexPath, P3 = unknown>(__validateValue: P0, _forKeyPath: P1, _ofObjectAtIndexPath: P2, _error: P3): R;
    _invokeSelector_withArguments_onKeyPath_ofObjectAtIndexPath<R = void, P0 = string, P1 = NSArray, P2 = NSString, P3 = NSIndexPath>(__invokeSelector: P0, _withArguments: P1, _onKeyPath: P2, _ofObjectAtIndexPath: P3): R;
    _setValue_forKeyPath_ofObjectAtIndexPath<R = void, P0 = unknown, P1 = NSString, P2 = NSIndexPath>(__setValue: P0, _forKeyPath: P1, _ofObjectAtIndexPath: P2): R;
    _valueForKeyPath_ofObjectAtIndexPath<R = unknown, P0 = NSString, P1 = unknown>(__valueForKeyPath: P0, _ofObjectAtIndexPath: P1): R;
  }
  namespace _NSBindingTreeProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
