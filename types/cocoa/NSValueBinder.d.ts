/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSValueBinder<T0 = void, T1 = void, T2 = void> extends NSEditorBinder, NSEditorProtocol {
    _didPresentDiscardEditingSheetWithRecovery_contextInfo<R = void, P0 = boolean, P1 = unknown>(__didPresentDiscardEditingSheetWithRecovery: P0, _contextInfo: P1): R;
    _presentDiscardEditingSheetWithError_discardEditingCallback_otherCallback_callbackContextInfo_relatedToBinding<R = void, P0 = unknown, P1 = string, P2 = string, P3 = void, P4 = unknown>(__presentDiscardEditingSheetWithError: P0, _discardEditingCallback: P1, _otherCallback: P2, _callbackContextInfo: P3, _relatedToBinding: P4): R;
    _presentDiscardEditingAlertPanelWithError_relatedToBinding<R = boolean, P0 = unknown, P1 = unknown>(__presentDiscardEditingAlertPanelWithError: P0, _relatedToBinding: P1): R;
    defaultSortDescriptorPrototypeForTableColumn<R = unknown, P0 = unknown>(_defaultSortDescriptorPrototypeForTableColumn: P0): R;
    _defaultSortDescriptorPrototypeKey<R = unknown>(): R;
    performAction<R = void, P0 = unknown>(_performAction: P0): R;
    validateAndCommitValueInEditor_editingIsEnding_errorUserInterfaceHandled<R = boolean, P0 = unknown, P1 = boolean, P2 = string>(_validateAndCommitValueInEditor: P0, _editingIsEnding: P1, _errorUserInterfaceHandled: P2): R;
    _discardValidateAndCommitValue<R = void, P0 = void>(__discardValidateAndCommitValue: P0): R;
    handleValidationError_description_inEditor_errorUserInterfaceHandled<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string>(_handleValidationError: P0, _description: P1, _inEditor: P2, _errorUserInterfaceHandled: P3): R;
    editorDidEndEditing<R = void, P0 = unknown>(_editorDidEndEditing: P0): R;
    editorDidBeginEditing<R = void, P0 = unknown>(_editorDidBeginEditing: P0): R;
    _endChanging<R = void>(): R;
    _startChanging<R = void>(): R;
    _commitEditingOtherCallback<R = void, P0 = unknown>(__commitEditingOtherCallback: P0): R;
    _commitEditingDiscardEditingCallback<R = void, P0 = unknown>(__commitEditingDiscardEditingCallback: P0): R;
    _applyDisplayedValueIfHasUncommittedChangesWithHandleErrors_typeOfAlert_discardEditingCallback_otherCallback_callbackContextInfo_didRunAlert_error<R = boolean, P0 = boolean, P1 = boolean, P2 = string, P3 = string, P4 = void, P5 = string, P6 = unknown>(__applyDisplayedValueIfHasUncommittedChangesWithHandleErrors: P0, _typeOfAlert: P1, _discardEditingCallback: P2, _otherCallback: P3, _callbackContextInfo: P4, _didRunAlert: P5, _error: P6): R;
    applyDisplayedValueHandleErrors_typeOfAlert_canRecoverFromErrors_discardEditingCallback_otherCallback_callbackContextInfo_didRunAlert_error<R = boolean, P0 = boolean, P1 = boolean, P2 = boolean, P3 = string, P4 = string, P5 = void, P6 = string, P7 = unknown>(_applyDisplayedValueHandleErrors: P0, _typeOfAlert: P1, _canRecoverFromErrors: P2, _discardEditingCallback: P3, _otherCallback: P4, _callbackContextInfo: P5, _didRunAlert: P6, _error: P7): R;
    _handleApplyValueResult_cachedValue_displayValue_objectValue<R = boolean, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown>(__handleApplyValueResult: P0, _cachedValue: P1, _displayValue: P2, _objectValue: P3): R;
    _revertDisplayValueBackToOriginalValue<R = void, P0 = void>(__revertDisplayValueBackToOriginalValue: P0): R;
    _applyObjectValue_forBinding_canRecoverFromErrors_handleErrors_typeOfAlert_discardEditingCallback_otherCallback_callbackContextInfo_didRunAlert<R = number, P0 = unknown, P1 = unknown, P2 = boolean, P3 = boolean, P4 = boolean, P5 = string, P6 = string, P7 = void, P8 = string>(__applyObjectValue: P0, _forBinding: P1, _canRecoverFromErrors: P2, _handleErrors: P3, _typeOfAlert: P4, _discardEditingCallback: P5, _otherCallback: P6, _callbackContextInfo: P7, _didRunAlert: P8): R;
    _handleApplyValueError_forBinding_canRecoverFromErrors_handleErrors_typeOfAlert_discardEditingCallback_otherCallback_callbackContextInfo_didRunAlert<R = number, P0 = unknown, P1 = unknown, P2 = boolean, P3 = boolean, P4 = boolean, P5 = string, P6 = string, P7 = void, P8 = string>(__handleApplyValueError: P0, _forBinding: P1, _canRecoverFromErrors: P2, _handleErrors: P3, _typeOfAlert: P4, _discardEditingCallback: P5, _otherCallback: P6, _callbackContextInfo: P7, _didRunAlert: P8): R;
    _adjustObject_mode_observedController_observedKeyPath_context_editableState_adjustState<R = void, P0 = unknown, P1 = __NSKeyValueCodingControllerModeType, P2 = unknown, P3 = unknown, P4 = void, P5 = string, P6 = string>(__adjustObject: P0, _mode: P1, _observedController: P2, _observedKeyPath: P3, _context: P4, _editableState: P5, _adjustState: P6): R;
    objectValueSupportsEnabledState<R = boolean, P0 = unknown>(_objectValueSupportsEnabledState: P0): R;
    createsSortDescriptor<R = boolean>(): R;
    setCreatesSortDescriptor<R = void, P0 = boolean>(_setCreatesSortDescriptor: P0): R;
    continuouslyUpdatesValue<R = boolean>(): R;
    setContinuouslyUpdatesValue<R = void, P0 = boolean>(_setContinuouslyUpdatesValue: P0): R;
    allowsEditingMultipleValuesSelection<R = boolean>(): R;
    setAllowsEditingMultipleValuesSelection<R = void, P0 = boolean>(_setAllowsEditingMultipleValuesSelection: P0): R;
    _shouldAlwaysUpdateDisplayValue<R = boolean>(): R;
    _validateDisplayValue<R = unknown>(): R;
    validateObjectValue<R = unknown, P0 = unknown>(_validateObjectValue: P0): R;
    _referenceBindingValueAtIndexPath<R = unknown, P0 = unknown>(__referenceBindingValueAtIndexPath: P0): R;
    _referenceBindingValueAtIndex<R = unknown, P0 = number>(__referenceBindingValueAtIndex: P0): R;
    _referenceBindingValue<R = unknown>(): R;
    objectValueForDisplayValue<R = unknown, P0 = unknown>(_objectValueForDisplayValue: P0): R;
    displayValueForObjectValue<R = unknown, P0 = unknown>(_displayValueForObjectValue: P0): R;
    _formatter<R = unknown>(): R;
    updateInvalidatedObjectValue_forObject<R = unknown, P0 = unknown, P1 = unknown>(_updateInvalidatedObjectValue: P0, _forObject: P1): R;
    shownValueInObject_errorEncountered_error<R = unknown, P0 = unknown, P1 = string, P2 = unknown>(_shownValueInObject: P0, _errorEncountered: P1, _error: P2): R;
    showValue_inObject<R = void, P0 = unknown, P1 = unknown>(_showValue: P0, _inObject: P1): R;
    _cachedDisplayValue<R = unknown>(): R;
    _cacheDisplayValue<R = void, P0 = unknown>(__cacheDisplayValue: P0): R;
    _cachedObjectValue<R = unknown>(): R;
    _cacheObjectValue<R = void, P0 = unknown>(__cacheObjectValue: P0): R;
    _cachedValuesAreValid<R = boolean>(): R;
    _valueClass<R = unknown>(): R;
    _valueClassIsSortableWithBinding<R = boolean, P0 = unknown>(__valueClassIsSortableWithBinding: P0): R;
    _supportsMinAndMax<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSValueBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEditorBinder, NSEditorProtocol {
      alloc<R = NSValueBinder>(): R;
      new: <R = NSValueBinder>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSValueBinder: cocoa.NSValueBinder.CLASS;
