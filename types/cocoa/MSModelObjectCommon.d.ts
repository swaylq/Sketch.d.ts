/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModelObjectCommon<T0 = void, T1 = void, T2 = void> extends NSObject, MSModelObjectCommonProtocol {
    cxx_destruct<R = void>(): R;
    propertiesAreEqual<R = boolean, P0 = unknown>(_propertiesAreEqual: P0): R;
    traits<R = number>(): R;
    primitiveObjectID<R = unknown>(): R;
    hasObjectID<R = boolean>(): R;
    recursivelyGenerateObjectID<R = unknown>(): R;
    generateObjectID<R = unknown>(): R;
    enumerateDescendants_withAncestors<R = void, P0 = CDUnknownBlockType, P1 = unknown>(_enumerateDescendants: P0, _withAncestors: P1): R;
    enumerateDescendants<R = void, P0 = CDUnknownBlockType>(_enumerateDescendants: P0): R;
    enumerateChildProperties<R = void, P0 = CDUnknownBlockType>(_enumerateChildProperties: P0): R;
    enumerateProperties<R = void, P0 = CDUnknownBlockType>(_enumerateProperties: P0): R;
    setNilValueForKey<R = void, P0 = unknown>(_setNilValueForKey: P0): R;
    defaultName<R = unknown>(): R;
    objectDidInit<R = void>(): R;
    initializeUnsetObjectPropertiesWithDefaults<R = void>(): R;
    performInitEmptyObject<R = void>(): R;
    initWithMinimalSetup<R = unknown>(): R;
    initWithBlock<R = unknown, P0 = CDUnknownBlockType>(_initWithBlock: P0): R;
    treeAsDictionary<R = unknown>(): R;
    simpleTreeStructure<R = unknown>(): R;
    treeStructure<R = unknown>(): R;
    appendTreeStructureToString_withIndent<R = void, P0 = unknown, P1 = number>(_appendTreeStructureToString: P0, _withIndent: P1): R;
    appendSimpleStructureToString_withIndent<R = void, P0 = unknown, P1 = number>(_appendSimpleStructureToString: P0, _withIndent: P1): R;
    isContainedByInstanceOfForeignSymbol<R = boolean, P0 = unknown>(_isContainedByInstanceOfForeignSymbol: P0): R;
    hasModelObjectCacheGeneration<R = boolean>(): R;
    modelObjectCacheGeneration<R = MSModelObjectCacheGeneration>(): R;
    objectID<R = NSString>(): R;
    setObjectID<R = void, P0 = NSString>(_v: P0): R;
    description<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSModelObjectCommon {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSModelObjectCommonProtocol {
      alloc<R = MSModelObjectCommon>(): R;
      new: <R = MSModelObjectCommon>() => R;
    }
  }
}

declare const MSModelObjectCommon: cocoa.MSModelObjectCommon.CLASS;
