/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataSupplierManager<T0 = void, T1 = void, T2 = void> extends NSObject, MSDataSupplierDelegateProtocol {
    cxx_destruct<R = void>(): R;
    makeGroupsFromPluginDataSuppliers<R = unknown, P0 = unknown>(_makeGroupsFromPluginDataSuppliers: P0): R;
    builtinDataGroupsFromDefaults<R = unknown>(): R;
    builtinDataFromDefaults<R = unknown>(): R;
    localDataFromDefaults<R = unknown>(): R;
    postDataSupplierChangeNotification<R = void>(): R;
    hasLocalDataSupplierWithDataIdentifier<R = boolean, P0 = unknown>(_hasLocalDataSupplierWithDataIdentifier: P0): R;
    firstPluginDataSupplierWithIdentifier<R = unknown, P0 = unknown>(_firstPluginDataSupplierWithIdentifier: P0): R;
    firstDataSupplierInArray_dataIdentifier<R = unknown, P0 = unknown, P1 = unknown>(_firstDataSupplierInArray: P0, _dataIdentifier: P1): R;
    imageForTextLocalDataSupplier_forSize<R = unknown, P0 = unknown, P1 = CGSize>(_imageForTextLocalDataSupplier: P0, _forSize: P1): R;
    imageForImageLocalDataSupplier<R = unknown, P0 = unknown>(_imageForImageLocalDataSupplier: P0): R;
    removePluginDataSuppliersNotIdentifiedWithIdentifiers<R = void, P0 = unknown>(_removePluginDataSuppliersNotIdentifiedWithIdentifiers: P0): R;
    removeLocalDataSuppliers<R = void, P0 = unknown>(_removeLocalDataSuppliers: P0): R;
    removeLocalDataSupplierGroup<R = void, P0 = unknown>(_removeLocalDataSupplierGroup: P0): R;
    removeLocalDataSupplierGroupWithIdentifier<R = void, P0 = unknown>(_removeLocalDataSupplierGroupWithIdentifier: P0): R;
    dataGroupsFromBuiltinData<R = unknown>(): R;
    savePluginDataGroups<R = void>(): R;
    saveBuiltinDataGroups<R = void>(): R;
    saveLocalDataGroups<R = void>(): R;
    dataGroupsFromLocalData<R = unknown>(): R;
    loadBuiltinData<R = void>(): R;
    addBuiltinDataSupplierGroup<R = void, P0 = unknown>(_addBuiltinDataSupplierGroup: P0): R;
    loadPluginData<R = void>(): R;
    loadLocalData<R = void>(): R;
    localDataSupplierGroupsInFolder<R = unknown, P0 = unknown>(_localDataSupplierGroupsInFolder: P0): R;
    canAddLocalDataGroupWithURL<R = boolean, P0 = unknown>(_canAddLocalDataGroupWithURL: P0): R;
    localDataSupplierGroupWithMultipleDataSuppliersWithGroupFolder<R = unknown, P0 = unknown>(_localDataSupplierGroupWithMultipleDataSuppliersWithGroupFolder: P0): R;
    addLocalDataSuppliers<R = void, P0 = unknown>(_addLocalDataSuppliers: P0): R;
    hasLocalDataSupplierWithURL<R = boolean, P0 = unknown>(_hasLocalDataSupplierWithURL: P0): R;
    addLocalDataSupplierGroup<R = void, P0 = unknown>(_addLocalDataSupplierGroup: P0): R;
    addLocalData<R = void, P0 = unknown>(_addLocalData: P0): R;
    builtinDataInApplication<R = unknown>(): R;
    loadDataSuppliers<R = void>(): R;
    localDataSuppliers<R = unknown>(): R;
    usableDataSupplierWithIdentifier<R = unknown, P0 = unknown>(_usableDataSupplierWithIdentifier: P0): R;
    dataSupplierWithIdentifier<R = unknown, P0 = unknown>(_dataSupplierWithIdentifier: P0): R;
    supplyData_atIndex_forKey<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_supplyData: P0, _atIndex: P1, _forKey: P2): R;
    supplyData_forKey<R = void, P0 = unknown, P1 = unknown>(_supplyData: P0, _forKey: P1): R;
    requestDataFromPluginDataSupplier_dataContext_applierBlock<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_requestDataFromPluginDataSupplier: P0, _dataContext: P1, _applierBlock: P2): R;
    deregisterDataSuppliersForPluginWithIdentifier<R = void, P0 = unknown>(_deregisterDataSuppliersForPluginWithIdentifier: P0): R;
    pluginDataSupplierGroupForPluginIdentifier<R = unknown, P0 = unknown>(_pluginDataSupplierGroupForPluginIdentifier: P0): R;
    pluginDataSuppliersWithPluginIdentifier<R = unknown, P0 = unknown>(_pluginDataSuppliersWithPluginIdentifier: P0): R;
    registerPluginDataSupplier_withName_dataType_pluginIdentifier_commandIdentifier<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(_registerPluginDataSupplier: P0, _withName: P1, _dataType: P2, _pluginIdentifier: P3, _commandIdentifier: P4): R;
    setPluginDataReplyContext_forDataKey<R = void, P0 = unknown, P1 = unknown>(_setPluginDataReplyContext: P0, _forDataKey: P1): R;
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    replyContexts<R = NSMutableDictionary>(): R;
    setReplyContexts<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    pluginDataGroups<R = NSMutableDictionary>(): R;
    setPluginDataGroups<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    localDataGroups<R = NSMutableDictionary>(): R;
    setLocalDataGroups<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    builtinDataGroups<R = NSMutableDictionary>(): R;
    setBuiltinDataGroups<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    builtinData<R = NSMutableArray>(): R;
    setBuiltinData<R = void, P0 = NSMutableArray>(_v: P0): R;
    localData<R = NSMutableArray>(): R;
    setLocalData<R = void, P0 = NSMutableArray>(_v: P0): R;
    pluginData<R = NSMutableArray>(): R;
    setPluginData<R = void, P0 = NSMutableArray>(_v: P0): R;
    objectID<R = NSString>(): R;
    delegate<R = MSDataSupplierManagerDelegate>(): R;
    dataSupplierGroups<R = NSDictionary>(): R;
    dataSuppliers<R = NSArray>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSDataSupplierManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSDataSupplierDelegateProtocol {
      alloc<R = MSDataSupplierManager>(): R;
      new: <R = MSDataSupplierManager>() => R;
      validLocalDataFileSystemURL<R = boolean, P0 = unknown>(_validLocalDataFileSystemURL: P0): R;
      URLForBuiltinDataNamed<R = unknown, P0 = unknown>(_URLForBuiltinDataNamed: P0): R;
      localizedBuiltinDataFolder<R = unknown>(): R;
      builtinDataDefaultLanguageFolder<R = unknown>(): R;
      builtinDataDefaultURL<R = unknown>(): R;
      builtinDataDefaultLanguage<R = unknown>(): R;
      builtinDataDefaultPath<R = unknown>(): R;
      makeObjectID<R = unknown>(): R;
    }
  }
}

declare const MSDataSupplierManager: cocoa.MSDataSupplierManager.CLASS;
