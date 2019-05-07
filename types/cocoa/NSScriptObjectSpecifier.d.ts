/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptObjectSpecifier<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    description<R = unknown>(): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    indicesOfObjectsByEvaluatingWithContainer_count<R = number, P0 = unknown, P1 = number>(_indicesOfObjectsByEvaluatingWithContainer: P0, _count: P1): R;
    objectsByEvaluatingWithContainers<R = unknown, P0 = unknown>(_objectsByEvaluatingWithContainers: P0): R;
    dealloc<R = void>(): R;
    initWithContainerSpecifier_key<R = unknown, P0 = unknown, P1 = unknown>(_initWithContainerSpecifier: P0, _key: P1): R;
    initWithContainerClassDescription_containerSpecifier_key<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithContainerClassDescription: P0, _containerSpecifier: P1, _key: P2): R;
    _scriptingSpecifierDescriptor<R = unknown>(): R;
    _putKeyFormAndDataInRecord<R = boolean, P0 = unknown>(__putKeyFormAndDataInRecord: P0): R;
    _createdDescriptor<R = unknown>(): R;
    _simpleDescription<R = unknown>(): R;
    _specifiedObjectTreeDepth<R = number>(): R;
    _typeDescription<R = unknown>(): R;
    _moreCompleteVariantOfTypeDescription<R = unknown, P0 = unknown>(__moreCompleteVariantOfTypeDescription: P0): R;
    _completeTypeDescription<R = unknown>(): R;
    _specifiesValueContainedByObjectBeingTested<R = boolean>(): R;
    _specifiesCollection<R = boolean>(): R;
    _specifiesMultipleIndexedObjectsPerContainer<R = boolean>(): R;
    _specifiesSingleIndexedObjectPerContainer<R = boolean>(): R;
    _specifiesMultipleObjectsPerContainer<R = boolean>(): R;
    _specifiedIndexesOfObjectsInContainer<R = unknown, P0 = unknown>(__specifiedIndexesOfObjectsInContainer: P0): R;
    _specifiedIndexOfObjectInContainer<R = number, P0 = unknown>(__specifiedIndexOfObjectInContainer: P0): R;
    _specifiedIndicesOfObjectOrObjectsInContainer_count<R = number, P0 = unknown, P1 = number>(__specifiedIndicesOfObjectOrObjectsInContainer: P0, _count: P1): R;
    _specifiedValueInContainer<R = unknown, P0 = unknown>(__specifiedValueInContainer: P0): R;
    _resetEvaluationErrorNumber<R = void>(): R;
    _descriptor<R = unknown>(): R;
    _setDescriptorNoCopy<R = void, P0 = unknown>(__setDescriptorNoCopy: P0): R;
    _initFromRecord<R = unknown, P0 = unknown>(__initFromRecord: P0): R;
    _asDescriptor<R = unknown>(): R;
    descriptor<R = NSAppleEventDescriptor>(): R;
    evaluationErrorSpecifier<R = NSScriptObjectSpecifier>(): R;
    evaluationErrorNumber<R = number>(): R;
    setEvaluationErrorNumber<R = void, P0 = number>(_v: P0): R;
    objectsByEvaluatingSpecifier<R = unknown>(): R;
    keyClassDescription<R = NSScriptClassDescription>(): R;
    childSpecifier<R = NSScriptObjectSpecifier>(): R;
    setChildSpecifier<R = void, P0 = NSScriptObjectSpecifier>(_v: P0): R;
    containerIsRangeContainerObject<R = boolean>(): R;
    setContainerIsRangeContainerObject<R = void, P0 = boolean>(_v: P0): R;
    containerIsObjectBeingTested<R = boolean>(): R;
    setContainerIsObjectBeingTested<R = void, P0 = boolean>(_v: P0): R;
    key<R = NSString>(): R;
    setKey<R = void, P0 = NSString>(_v: P0): R;
    containerSpecifier<R = NSScriptObjectSpecifier>(): R;
    setContainerSpecifier<R = void, P0 = NSScriptObjectSpecifier>(_v: P0): R;
    containerClassDescription<R = NSScriptClassDescription>(): R;
    setContainerClassDescription<R = void, P0 = NSScriptClassDescription>(_v: P0): R;
  }
  namespace NSScriptObjectSpecifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSScriptObjectSpecifier>(): R;
      new: <R = NSScriptObjectSpecifier>() => R;
      objectSpecifierWithDescriptor<R = unknown, P0 = unknown>(_objectSpecifierWithDescriptor: P0): R;
      _scriptingSpecifierWithDescriptor<R = unknown, P0 = unknown>(__scriptingSpecifierWithDescriptor: P0): R;
      _fromContainerInfo_andKeyCode_getAdjustedContainerInfo_andKey<R = boolean, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown>(__fromContainerInfo: P0, _andKeyCode: P1, _getAdjustedContainerInfo: P2, _andKey: P3): R;
      _keyCodeFromRecord<R = number, P0 = unknown>(__keyCodeFromRecord: P0): R;
      _fromRecord_getContainerInfo<R = boolean, P0 = unknown, P1 = unknown>(__fromRecord: P0, _getContainerInfo: P1): R;
      _fromRecord_getContainerInfo_andKey<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(__fromRecord: P0, _getContainerInfo: P1, _andKey: P2): R;
      _objectSpecifierFromDescriptor_inCommandConstructionContext<R = unknown, P0 = unknown, P1 = unknown>(__objectSpecifierFromDescriptor: P0, _inCommandConstructionContext: P1): R;
      _objectSpecifierFromDescriptor<R = unknown, P0 = unknown>(__objectSpecifierFromDescriptor: P0): R;
    }
  }
}

declare const NSScriptObjectSpecifier: cocoa.NSScriptObjectSpecifier.CLASS;
