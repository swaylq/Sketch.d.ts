/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSelectionBinder<T0 = void, T1 = void, T2 = void> extends NSValueBinder {
    contentValueWithEditedMode_selectedObject<R = unknown, P0 = __NSKeyValueCodingControllerModeType, P1 = unknown>(_contentValueWithEditedMode: P0, _selectedObject: P1): R;
    contentCountWithEditedMode<R = number, P0 = __NSKeyValueCodingControllerModeType>(_contentCountWithEditedMode: P0): R;
    contentObjectWithEditedMode_contentIndex<R = unknown, P0 = __NSKeyValueCodingControllerModeType, P1 = number>(_contentObjectWithEditedMode: P0, _contentIndex: P1): R;
    contentValueWithEditedMode_contentIndex<R = unknown, P0 = __NSKeyValueCodingControllerModeType, P1 = number>(_contentValueWithEditedMode: P0, _contentIndex: P1): R;
    _valueForBindingWithoutResolve_mode<R = unknown, P0 = unknown, P1 = __NSKeyValueCodingControllerModeType>(__valueForBindingWithoutResolve: P0, _mode: P1): R;
    contentObjectKey<R = unknown>(): R;
    contentValueKey<R = unknown>(): R;
    preferredPlaceholderForMarker<R = unknown, P0 = unknown>(_preferredPlaceholderForMarker: P0): R;
    _preferredPlaceholderForMarker_onlyIfNotExplicitlySet<R = unknown, P0 = unknown, P1 = boolean>(__preferredPlaceholderForMarker: P0, _onlyIfNotExplicitlySet: P1): R;
    _analyzeContentBindingInSyncWithBinding<R = boolean, P0 = unknown>(__analyzeContentBindingInSyncWithBinding: P0): R;
    selectionMechanismWasDismissed<R = void, P0 = unknown>(_selectionMechanismWasDismissed: P0): R;
    contentPlacementTag<R = number>(): R;
    setContentPlacementTag<R = void, P0 = number>(_setContentPlacementTag: P0): R;
    insertsNullPlaceholder<R = boolean>(): R;
    setInsertsNullPlaceholder<R = void, P0 = boolean>(_setInsertsNullPlaceholder: P0): R;
  }
  namespace NSSelectionBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSValueBinder {
      alloc<R = NSSelectionBinder>(): R;
      new: <R = NSSelectionBinder>() => R;
    }
  }
}

declare const NSSelectionBinder: cocoa.NSSelectionBinder.CLASS;
