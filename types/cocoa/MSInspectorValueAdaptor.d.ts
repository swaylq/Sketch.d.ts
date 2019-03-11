/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorValueAdaptor<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    removeChangeObserver<R = void, P0 = unknown>(_removeChangeObserver: P0): R;
    addChangeObserver<R = void, P0 = unknown>(_addChangeObserver: P0): R;
    handleInvalidInputError<R = void, P0 = unknown>(_handleInvalidInputError: P0): R;
    presentError<R = void, P0 = unknown>(_presentError: P0): R;
    transformAdaptorValue_forModel_context_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_transformAdaptorValue: P0, _forModel: P1, _context: P2, _error: P3): R;
    transformedValuesFromAdaptorValue_contexts_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_transformedValuesFromAdaptorValue: P0, _contexts: P1, _error: P2): R;
    valuesDidChange<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    dealloc<R = void>(): R;
    initWithModelsController_valueGetter_valueSetter_modelKeyPathsToWatch<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType, P3 = unknown>(_initWithModelsController: P0, _valueGetter: P1, _valueSetter: P2, _modelKeyPathsToWatch: P3): R;
    initWithModelsController_valueGetter_valueSetter<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType>(_initWithModelsController: P0, _valueGetter: P1, _valueSetter: P2): R;
    initWithModelsController_modelKeyPath<R = unknown, P0 = unknown, P1 = unknown>(_initWithModelsController: P0, _modelKeyPath: P1): R;
    changeObservers<R = cocoa.NSHashTable>(): R;
    setChangeObservers<R = void, P0 = cocoa.NSHashTable>(_v: P0): R;
    keyPathsToWatch<R = cocoa.NSArray>(): R;
    setKeyPathsToWatch<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    valueSetter<R = cocoa.CDUnknownBlockType>(): R;
    setValueSetter<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    valueGetter<R = cocoa.CDUnknownBlockType>(): R;
    setValueGetter<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    modelsController<R = cocoa.NSArrayController>(): R;
    setModelsController<R = void, P0 = cocoa.NSArrayController>(_v: P0): R;
    view<R = cocoa.NSView>(): R;
    setView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    showsDefaultAlerts<R = boolean>(): R;
    setShowsDefaultAlerts<R = void, P0 = boolean>(_v: P0): R;
    delegate<R = cocoa.MSInspectorValueAdaptorDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSInspectorValueAdaptorDelegate>(_v: P0): R;
    value<R = unknown>(): R;
    setValue<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface MSInspectorValueAdaptor<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSInspectorValueAdaptor>(): R;
      new: <R = MSInspectorValueAdaptor>() => R;
    }
  }
}

declare const MSInspectorValueAdaptor: cocoa.classes.MSInspectorValueAdaptor;
