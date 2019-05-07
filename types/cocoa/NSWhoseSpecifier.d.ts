/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWhoseSpecifier<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {
    _subsetDescription<R = unknown>(): R;
    _objectIndexForSubelementIdentifier_subelementIndex_fromIndexes<R = number, P0 = number, P1 = number, P2 = unknown>(__objectIndexForSubelementIdentifier: P0, _subelementIndex: P1, _fromIndexes: P2): R;
    _indexesOfPassingObjectsInContainer<R = unknown, P0 = unknown>(__indexesOfPassingObjectsInContainer: P0): R;
    _initFromRangeRecord<R = unknown, P0 = unknown>(__initFromRangeRecord: P0): R;
    _initFromAbsolutePositionRecord<R = unknown, P0 = unknown>(__initFromAbsolutePositionRecord: P0): R;
    _initFromTestRecord<R = unknown, P0 = unknown>(__initFromTestRecord: P0): R;
    _setEndSubelementFromDescriptor<R = boolean, P0 = unknown>(__setEndSubelementFromDescriptor: P0): R;
    _setStartSubelementFromDescriptor<R = boolean, P0 = unknown>(__setStartSubelementFromDescriptor: P0): R;
    initWithContainerClassDescription_containerSpecifier_key_test<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithContainerClassDescription: P0, _containerSpecifier: P1, _key: P2, _test: P3): R;
    _shouldIgnoreInvalidIndexError<R = boolean>(): R;
    endSubelementIndex<R = number>(): R;
    setEndSubelementIndex<R = void, P0 = number>(_v: P0): R;
    endSubelementIdentifier<R = number>(): R;
    setEndSubelementIdentifier<R = void, P0 = number>(_v: P0): R;
    startSubelementIndex<R = number>(): R;
    setStartSubelementIndex<R = void, P0 = number>(_v: P0): R;
    startSubelementIdentifier<R = number>(): R;
    setStartSubelementIdentifier<R = void, P0 = number>(_v: P0): R;
    test<R = NSScriptWhoseTest>(): R;
    setTest<R = void, P0 = NSScriptWhoseTest>(_v: P0): R;
  }
  namespace NSWhoseSpecifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {
      alloc<R = NSWhoseSpecifier>(): R;
      new: <R = NSWhoseSpecifier>() => R;
      _canCreateCollapsedSpecifierFromRangeRecord<R = boolean, P0 = unknown>(__canCreateCollapsedSpecifierFromRangeRecord: P0): R;
      _canCreateCollapsedSpecifierFromAbsolutePositionRecord<R = boolean, P0 = unknown>(__canCreateCollapsedSpecifierFromAbsolutePositionRecord: P0): R;
    }
  }
}

declare const NSWhoseSpecifier: cocoa.NSWhoseSpecifier.CLASS;
