/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSValueBinderPluginProtocol<T0 = void, T1 = void, T2 = void> extends _NSEditorBinderPluginProtocol {
    applyObjectValue_forBinding_operation_needToRunAlert_error<R = boolean, P0 = unknown, P1 = NSString, P2 = number, P3 = string, P4 = unknown>(_applyObjectValue: P0, _forBinding: P1, _operation: P2, _needToRunAlert: P3, _error: P4): R;
    shouldAlwaysUpdateDisplayValue<R = boolean>(): R;
    invalidateObjectValueInObject<R = void, P0 = unknown>(_invalidateObjectValueInObject: P0): R;
    objectValueInvalidationCapableObjectForObject<R = unknown, P0 = unknown>(_objectValueInvalidationCapableObjectForObject: P0): R;
    shouldProvideSortDescriptor_optionsAdvertisingOnly<R = boolean, P0 = unknown, P1 = boolean>(_shouldProvideSortDescriptor: P0, _optionsAdvertisingOnly: P1): R;
    isObjectTableColumnDataCell<R = boolean, P0 = unknown>(_isObjectTableColumnDataCell: P0): R;
    formatterOfObject<R = NSFormatter, P0 = unknown>(_formatterOfObject: P0): R;
    binderReferenceObjectValue<R = unknown>(): R;
    shownValueInObject<R = unknown, P0 = unknown>(_shownValueInObject: P0): R;
    formattedValueInObject_errorEncountered_error<R = unknown, P0 = unknown, P1 = string, P2 = unknown>(_formattedValueInObject: P0, _errorEncountered: P1, _error: P2): R;
    showValue_inObject<R = void, P0 = unknown, P1 = unknown>(_showValue: P0, _inObject: P1): R;
    shouldIgnoreAction<R = boolean, P0 = unknown>(_shouldIgnoreAction: P0): R;
    editingBinderForControl<R = NSValueBinder, P0 = NSControl>(_editingBinderForControl: P0): R;
    actionHasEnded_sender<R = void, P0 = unknown, P1 = unknown>(_actionHasEnded: P0, _sender: P1): R;
    actionHasBegun_sender<R = void, P0 = unknown, P1 = unknown>(_actionHasBegun: P0, _sender: P1): R;
    _actionHasBegun_atIndexPath<R = void, P0 = unknown, P1 = NSIndexPath>(__actionHasBegun: P0, _atIndexPath: P1): R;
    _actionHasBegun_atIndex<R = void, P0 = unknown, P1 = number>(__actionHasBegun: P0, _atIndex: P1): R;
    editingWasAborted<R = void, P0 = unknown>(_editingWasAborted: P0): R;
    editingHasEnded<R = void, P0 = unknown>(_editingHasEnded: P0): R;
    editingHasBegun<R = void, P0 = unknown>(_editingHasBegun: P0): R;
    editedMode_forEditingOrAction<R = __NSKeyValueCodingControllerModeType, P0 = unknown, P1 = boolean>(_editedMode: P0, _forEditingOrAction: P1): R;
    needsDelegate<R = boolean>(): R;
    valueClass_forBinding<R = unknown, P0 = unknown, P1 = NSString>(_valueClass: P0, _forBinding: P1): R;
    valueClass<R = unknown, P0 = unknown>(_valueClass: P0): R;
    isBooleanValueBindingForObject<R = boolean, P0 = unknown>(_isBooleanValueBindingForObject: P0): R;
    updateCellOrControl_forMaxValue<R = boolean, P0 = unknown, P1 = unknown>(_updateCellOrControl: P0, _forMaxValue: P1): R;
    updateCellOrControl_forMinValue<R = boolean, P0 = unknown, P1 = unknown>(_updateCellOrControl: P0, _forMinValue: P1): R;
    storeMin_andMax_ofObject<R = void, P0 = boolean, P1 = boolean, P2 = unknown>(_storeMin: P0, _andMax: P1, _ofObject: P2): R;
    canSupportMinAndMaxForObject<R = boolean, P0 = unknown>(_canSupportMinAndMaxForObject: P0): R;
    canIgnoreSettingMinAndMaxForObject<R = boolean, P0 = unknown>(_canIgnoreSettingMinAndMaxForObject: P0): R;
    allowedValueBindingMask<R = number>(): R;
  }
  namespace _NSValueBinderPluginProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSEditorBinderPluginProtocol {}
  }
}
