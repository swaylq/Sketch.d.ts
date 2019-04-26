/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIBObjectData<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    _removeEarlyDecodingObjectConnectionsFromConnections<R = void, P0 = unknown>(__removeEarlyDecodingObjectConnectionsFromConnections: P0): R;
    _addEarlyDecodingObjectsFromObjectList_toConnections<R = void, P0 = unknown, P1 = unknown>(__addEarlyDecodingObjectsFromObjectList: P0, _toConnections: P1): R;
    nibInstantiateWithOwner_options_topLevelObjects<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_nibInstantiateWithOwner: P0, _options: P1, _topLevelObjects: P2): R;
    nibInstantiateWithOwner_topLevelObjects<R = void, P0 = unknown, P1 = unknown>(_nibInstantiateWithOwner: P0, _topLevelObjects: P1): R;
    nibInstantiateWithOwner<R = void, P0 = unknown>(_nibInstantiateWithOwner: P0): R;
    instantiateObject<R = unknown, P0 = unknown>(_instantiateObject: P0): R;
    setShouldEncodeDesigntimeData<R = void, P0 = boolean>(_setShouldEncodeDesigntimeData: P0): R;
    shouldEncodeDesigntimeData<R = boolean>(): R;
    classTable<R = unknown>(): R;
    oidTable<R = unknown>(): R;
    nameTable<R = unknown>(): R;
    objectTable<R = unknown>(): R;
    setRootObject<R = void, P0 = unknown>(_setRootObject: P0): R;
    rootObject<R = unknown>(): R;
    setFirstResponder<R = void, P0 = unknown>(_setFirstResponder: P0): R;
    firstResponder<R = unknown>(): R;
    setNextObjectID<R = void, P0 = number>(_setNextObjectID: P0): R;
    nextObjectID<R = number>(): R;
    setTargetFramework<R = void, P0 = unknown>(_setTargetFramework: P0): R;
    targetFramework<R = unknown>(): R;
    setConnections<R = void, P0 = unknown>(_setConnections: P0): R;
    connections<R = unknown>(): R;
    setVisibleWindows<R = void, P0 = unknown>(_setVisibleWindows: P0): R;
    visibleWindows<R = unknown>(): R;
    dealloc<R = void>(): R;
    _assignObjectIds<R = void>(): R;
    _readVersion0<R = void, P0 = unknown>(__readVersion0: P0): R;
    _encodeMapTable_forTypes_withCoder<R = void, P0 = unknown, P1 = string, P2 = unknown>(__encodeMapTable: P0, _forTypes: P1, _withCoder: P2): R;
    _encodeIntValuedMapTable_withCoder<R = void, P0 = unknown, P1 = unknown>(__encodeIntValuedMapTable: P0, _withCoder: P1): R;
    _encodeObjectValuedMapTable_withCoder<R = void, P0 = unknown, P1 = unknown>(__encodeObjectValuedMapTable: P0, _withCoder: P1): R;
  }
  namespace NSIBObjectData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSIBObjectData>(): R;
      new: <R = NSIBObjectData>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSIBObjectData: cocoa.NSIBObjectData.CLASS;
