/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSymbolInstance<T = any> extends cocoa._MSImmutableSymbolInstance, cocoa.MSFlowContainmentCheckProtocol {
    modifiedMasterInDocument<R = unknown, P0 = unknown>(_modifiedMasterInDocument: P0): R;
    prepareModifiedMasterInDocument<R = unknown, P0 = unknown>(_prepareModifiedMasterInDocument: P0): R;
    modifiedMasterCacheKey<R = unknown>(): R;
    shouldCreateModifiedMasterForMaster<R = boolean, P0 = unknown>(_shouldCreateModifiedMasterForMaster: P0): R;
    availableOverridesWithDocument<R = unknown, P0 = unknown>(_availableOverridesWithDocument: P0): R;
    scale<R = number>(): R;
    isScaled<R = boolean>(): R;
    paddedInfluenceRect_withPaddingsFromMasterInDocument_visitedSymbols<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown, P2 = unknown>(_paddedInfluenceRect: P0, _withPaddingsFromMasterInDocument: P1, _visitedSymbols: P2): R;
    overridesFromGroupForMigration<R = unknown, P0 = unknown>(_overridesFromGroupForMigration: P0): R;
    initWithGroupForMigration<R = unknown, P0 = unknown>(_initWithGroupForMigration: P0): R;
    overrideMatchingPoint_inDocument<R = unknown, P0 = unknown, P1 = unknown>(_overrideMatchingPoint: P0, _inDocument: P1): R;
    overrideInOverrides_withPath_andPropertyName<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_overrideInOverrides: P0, _withPath: P1, _andPropertyName: P2): R;
    calculateAvailableOverridesWithDocument<R = unknown, P0 = unknown>(_calculateAvailableOverridesWithDocument: P0): R;
    overridePointsInDocument<R = unknown, P0 = unknown>(_overridePointsInDocument: P0): R;
    shadowsFollowRotation<R = boolean>(): R;
    ensureOverrideValuesAreUnique<R = void>(): R;
    updateOverridesDictionary_withObjectIDMapping_afterChangingSymbolMasterWithID_currentID<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_updateOverridesDictionary: P0, _withObjectIDMapping: P1, _afterChangingSymbolMasterWithID: P2, _currentID: P3): R;
    updateOverridesWithObjectIDMapping_afterChangingSymbolMasterWithID<R = void, P0 = unknown, P1 = unknown>(_updateOverridesWithObjectIDMapping: P0, _afterChangingSymbolMasterWithID: P1): R;
    overridesWithGridIndexRemoved<R = unknown, P0 = unknown>(_overridesWithGridIndexRemoved: P0): R;
    migratePropertiesFromV96OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV96OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV89OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV89OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV84OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV84OrEarlierWithUnarchiver: P0): R;
    differsFromLayer<R = boolean, P0 = unknown>(_differsFromLayer: P0): R;
    cachedModifiedSymbolForMaster_inContext<R = unknown, P0 = unknown, P1 = unknown>(_cachedModifiedSymbolForMaster: P0, _inContext: P1): R;
    cachedModifiedSymbolMaster<R = cocoa.MSImmutableSymbolMaster>(): R;
    setCachedModifiedSymbolMaster<R = void, P0 = cocoa.MSImmutableSymbolMaster>(_v: P0): R;
    masterRefreshCounter<R = number>(): R;
    overrides<R = cocoa.NSDictionary>(): R;
  }
  namespace classes {
    export interface MSImmutableSymbolInstance<T = any> extends cocoa.classes._MSImmutableSymbolInstance, cocoa.classes.MSFlowContainmentCheckProtocol {
      alloc<R = MSImmutableSymbolInstance>(): R;
      new: <R = MSImmutableSymbolInstance>() => R;
    }
  }
}

declare const MSImmutableSymbolInstance: cocoa.classes.MSImmutableSymbolInstance;
