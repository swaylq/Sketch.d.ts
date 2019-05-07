/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModelObject<T0 = void, T1 = void, T2 = void> extends MSModelObjectCommon, NSCopyingProtocol, MSModelObjectProtocol {
    breakConnectionWith<R = void, P0 = unknown>(_breakConnectionWith: P0): R;
    parentGroupRecursive<R = unknown>(): R;
    setAsParentOnChildren<R = void>(): R;
    rootModelObject<R = unknown>(): R;
    invalidateImmutableObjectAndAncestors<R = void>(): R;
    invalidateImmutableObject<R = void>(): R;
    invaliateImmutableObject<R = void>(): R;
    invalidateModelCacheGeneration<R = void>(): R;
    object_didChangeProperty<R = void, P0 = unknown, P1 = unknown>(_object: P0, _didChangeProperty: P1): R;
    fireFaultIfNecessary<R = void>(): R;
    fireFault<R = void>(): R;
    initWithImmutableModelObject<R = unknown, P0 = unknown>(_initWithImmutableModelObject: P0): R;
    clearCachedValueForKey<R = void, P0 = unknown>(_clearCachedValueForKey: P0): R;
    clearCache<R = void>(): R;
    updateCachedValue_forKey<R = void, P0 = unknown, P1 = unknown>(_updateCachedValue: P0, _forKey: P1): R;
    cachedValueForKey_setUsingBlock<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_cachedValueForKey: P0, _setUsingBlock: P1): R;
    cachedValueForKey<R = unknown, P0 = unknown>(_cachedValueForKey: P0): R;
    performInitWithImmutableModelObject<R = void, P0 = unknown>(_performInitWithImmutableModelObject: P0): R;
    syncPropertiesFromObject<R = void, P0 = unknown>(_syncPropertiesFromObject: P0): R;
    copyPropertiesToObject_options<R = void, P0 = unknown, P1 = number>(_copyPropertiesToObject: P0, _options: P1): R;
    copyWithOptions<R = unknown, P0 = number>(_copyWithOptions: P0): R;
    metadataForKey<R = unknown, P0 = unknown>(_metadataForKey: P0): R;
    storeMetadata_forKey<R = void, P0 = unknown, P1 = unknown>(_storeMetadata: P0, _forKey: P1): R;
    documentData<R = MSDocumentData>(): R;
    setDocumentData<R = void, P0 = MSDocumentData>(_v: P0): R;
    isFault<R = boolean>(): R;
    setIsFault<R = void, P0 = boolean>(_v: P0): R;
    parentObject<R = MSModelObject>(): R;
    setParentObject<R = void, P0 = MSModelObject>(_v: P0): R;
    parentGroup<R = MSLayerGroup>(): R;
    immutableModelObject<R = unknown>(): R;
    isForeign<R = boolean>(): R;
    foreignObject<R = MSModelObject>(): R;
    cachedImmutableModelObject<R = unknown>(): R;
    setCachedImmutableModelObject<R = void, P0 = unknown>(_v: P0): R;
    UIMetadataKey<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    objectID<R = NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSModelObject {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSModelObjectCommon, NSCopyingProtocol, MSModelObjectProtocol {
      alloc<R = MSModelObject>(): R;
      new: <R = MSModelObject>() => R;
      immutableClass<R = unknown>(): R;
      allowsFaulting<R = boolean>(): R;
    }
  }
}

declare const MSModelObject: cocoa.MSModelObject.CLASS;
