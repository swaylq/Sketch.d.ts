/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCPasteboardMock<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    clearContents<R = void>(): R;
    writeObjects<R = boolean, P0 = unknown>(_writeObjects: P0): R;
    types<R = unknown>(): R;
    availableTypeFromArray<R = unknown, P0 = unknown>(_availableTypeFromArray: P0): R;
    propertyListForType<R = unknown, P0 = unknown>(_propertyListForType: P0): R;
    setPropertyList_forType<R = boolean, P0 = unknown, P1 = unknown>(_setPropertyList: P0, _forType: P1): R;
    stringForType<R = unknown, P0 = unknown>(_stringForType: P0): R;
    setString_forType<R = boolean, P0 = unknown, P1 = unknown>(_setString: P0, _forType: P1): R;
    dataForType<R = unknown, P0 = unknown>(_dataForType: P0): R;
    setData_forType<R = void, P0 = unknown, P1 = unknown>(_setData: P0, _forType: P1): R;
    addTypes_owner<R = void, P0 = unknown, P1 = unknown>(_addTypes: P0, _owner: P1): R;
    declareTypes_owner<R = void, P0 = unknown, P1 = unknown>(_declareTypes: P0, _owner: P1): R;
    addDataForTypes_fromOwner<R = void, P0 = unknown, P1 = unknown>(_addDataForTypes: P0, _fromOwner: P1): R;
    storage<R = NSMutableDictionary>(): R;
    setStorage<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    changeCount<R = number>(): R;
  }
  namespace BCPasteboardMock {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = BCPasteboardMock>(): R;
      new: <R = BCPasteboardMock>() => R;
      pasteboardWithName<R = unknown, P0 = unknown>(_pasteboardWithName: P0): R;
      generalPasteboard<R = unknown>(): R;
    }
  }
}

declare const BCPasteboardMock: cocoa.BCPasteboardMock.CLASS;
