/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMathInspectorValueAdaptor<T0 = void, T1 = void, T2 = void> extends MSInspectorValueAdaptor, MSIncrementDecrementDelegateProtocol {
    forceRelativeMathForBlock<R = void, P0 = CDUnknownBlockType>(_forceRelativeMathForBlock: P0): R;
    currentAdjustOptions<R = number>(): R;
    errorWithUnparsableString<R = unknown, P0 = unknown>(_errorWithUnparsableString: P0): R;
    checkAndAdjustValues_contexts_withNumberFormatter_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_checkAndAdjustValues: P0, _contexts: P1, _withNumberFormatter: P2, _error: P3): R;
    valueFromPrefixStrippedString_forModel_originalString_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_valueFromPrefixStrippedString: P0, _forModel: P1, _originalString: P2, _error: P3): R;
    trimValueString_getMathPrefix<R = unknown, P0 = unknown, P1 = unknown>(_trimValueString: P0, _getMathPrefix: P1): R;
    setValue<R = void, P0 = unknown>(_setValue: P0): R;
    value<R = unknown>(): R;
    initWithModelsController_floatValueGetter_floatValueSetter_modelKeyPathsToWatch<R = unknown, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType, P3 = unknown>(_initWithModelsController: P0, _floatValueGetter: P1, _floatValueSetter: P2, _modelKeyPathsToWatch: P3): R;
    initWithModelsController_modelKeyPath_valueTransformer<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithModelsController: P0, _modelKeyPath: P1, _valueTransformer: P2): R;
    cachedIntegerNumberFormatter<R = NSNumberFormatter>(): R;
    setCachedIntegerNumberFormatter<R = void, P0 = NSNumberFormatter>(_v: P0): R;
    cachedFloatNumberFormatter<R = NSNumberFormatter>(): R;
    setCachedFloatNumberFormatter<R = void, P0 = NSNumberFormatter>(_v: P0): R;
    forcePrefixMath<R = boolean>(): R;
    setForcePrefixMath<R = void, P0 = boolean>(_v: P0): R;
    operation<R = number>(): R;
    setOperation<R = void, P0 = number>(_v: P0): R;
    isIncrementing<R = boolean>(): R;
    setIsIncrementing<R = void, P0 = boolean>(_v: P0): R;
    numberFormatter<R = NSNumberFormatter>(): R;
    setNumberFormatter<R = void, P0 = NSNumberFormatter>(_v: P0): R;
    adjustIndividually<R = boolean>(): R;
    setAdjustIndividually<R = void, P0 = boolean>(_v: P0): R;
    clampsValues<R = boolean>(): R;
    setClampsValues<R = void, P0 = boolean>(_v: P0): R;
    allowsFloat<R = boolean>(): R;
    effectiveNumberFormatter<R = NSNumberFormatter>(): R;
    delegate<R = MSInspectorMathValueAdaptorDelegate>(): R;
    setDelegate<R = void, P0 = MSInspectorMathValueAdaptorDelegate>(_v: P0): R;
  }
  namespace MSMathInspectorValueAdaptor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorValueAdaptor, MSIncrementDecrementDelegateProtocol {
      alloc<R = MSMathInspectorValueAdaptor>(): R;
      new: <R = MSMathInspectorValueAdaptor>() => R;
    }
  }
}

declare const MSMathInspectorValueAdaptor: cocoa.MSMathInspectorValueAdaptor.CLASS;
