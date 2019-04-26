/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPositionalSpecifier<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    evaluate<R = void>(): R;
    _evaluateRelativeToObjectInContainer<R = void, P0 = unknown>(__evaluateRelativeToObjectInContainer: P0): R;
    _evaluateToBeginningOrEndOfContainer<R = void, P0 = unknown>(__evaluateToBeginningOrEndOfContainer: P0): R;
    _preEvaluate<R = void>(): R;
    setInsertionClassDescription<R = void, P0 = unknown>(_setInsertionClassDescription: P0): R;
    dealloc<R = void>(): R;
    initWithPosition_objectSpecifier<R = unknown, P0 = number, P1 = unknown>(_initWithPosition: P0, _objectSpecifier: P1): R;
    _insertionIsAtEnd<R = boolean>(): R;
    _specifiesUnorderedAddition<R = boolean>(): R;
    _specifiesSetting<R = boolean>(): R;
    _initFromRecord<R = unknown, P0 = unknown>(__initFromRecord: P0): R;
    insertionReplaces<R = boolean>(): R;
    insertionIndex<R = number>(): R;
    insertionKey<R = NSString>(): R;
    insertionContainer<R = unknown>(): R;
    objectSpecifier<R = NSScriptObjectSpecifier>(): R;
    position<R = number>(): R;
  }
  namespace NSPositionalSpecifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPositionalSpecifier>(): R;
      new: <R = NSPositionalSpecifier>() => R;
      _describedClass_isSubclassOfClass<R = boolean, P0 = unknown, P1 = unknown>(__describedClass: P0, _isSubclassOfClass: P1): R;
      _positionalSpecifierFromDescriptor<R = unknown, P0 = unknown>(__positionalSpecifierFromDescriptor: P0): R;
      _scriptingLocationSpecifierWithDescriptor<R = unknown, P0 = unknown>(__scriptingLocationSpecifierWithDescriptor: P0): R;
    }
  }
}

declare const NSPositionalSpecifier: cocoa.NSPositionalSpecifier.CLASS;
