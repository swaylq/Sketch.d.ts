/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTokenField<T0 = void, T1 = void, T2 = void> extends NSTextField {
    displaysTokenWhileEditing<R = boolean>(): R;
    setDisplaysTokenWhileEditing<R = void, P0 = boolean>(_setDisplaysTokenWhileEditing: P0): R;
    tokenFieldCell<R = unknown>(): R;
    tokenFieldCell_characterAtIndex_shouldTerminateString<R = boolean, P0 = unknown, P1 = number, P2 = unknown>(_tokenFieldCell: P0, _characterAtIndex: P1, _shouldTerminateString: P2): R;
    tokenFieldCell_writeRepresentedObjects_toPasteboard<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_tokenFieldCell: P0, _writeRepresentedObjects: P1, _toPasteboard: P2): R;
    tokenFieldCell_readFromPasteboard<R = unknown, P0 = unknown, P1 = unknown>(_tokenFieldCell: P0, _readFromPasteboard: P1): R;
    tokenFieldCell__immediateActionAnimationControllerForRepresentedObject_inTextView<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_tokenFieldCell: P0, __immediateActionAnimationControllerForRepresentedObject: P1, _inTextView: P2): R;
    tokenFieldCell_hasMenuForRepresentedObject<R = boolean, P0 = unknown, P1 = unknown>(_tokenFieldCell: P0, _hasMenuForRepresentedObject: P1): R;
    tokenFieldCell_menuForRepresentedObject<R = unknown, P0 = unknown, P1 = unknown>(_tokenFieldCell: P0, _menuForRepresentedObject: P1): R;
    tokenFieldCell_styleForRepresentedObject<R = number, P0 = unknown, P1 = unknown>(_tokenFieldCell: P0, _styleForRepresentedObject: P1): R;
    tokenFieldCell_representedObjectForEditingString<R = unknown, P0 = unknown, P1 = unknown>(_tokenFieldCell: P0, _representedObjectForEditingString: P1): R;
    tokenFieldCell_shouldUseDrawingAttributes_forRepresentedObject<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_tokenFieldCell: P0, _shouldUseDrawingAttributes: P1, _forRepresentedObject: P2): R;
    tokenFieldCell_setUpTokenAttachmentCell_forRepresentedObject<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_tokenFieldCell: P0, _setUpTokenAttachmentCell: P1, _forRepresentedObject: P2): R;
    tokenFieldCell_tooltipStringForRepresentedObject<R = unknown, P0 = unknown, P1 = unknown>(_tokenFieldCell: P0, _tooltipStringForRepresentedObject: P1): R;
    tokenFieldCell_editingStringForRepresentedObject<R = unknown, P0 = unknown, P1 = unknown>(_tokenFieldCell: P0, _editingStringForRepresentedObject: P1): R;
    tokenFieldCell_displayStringForRepresentedObject<R = unknown, P0 = unknown, P1 = unknown>(_tokenFieldCell: P0, _displayStringForRepresentedObject: P1): R;
    tokenFieldCell_shouldAddObjects_atIndex<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_tokenFieldCell: P0, _shouldAddObjects: P1, _atIndex: P2): R;
    tokenFieldCell_completionsForSubstring_indexOfToken_indexOfSelectedItem<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(_tokenFieldCell: P0, _completionsForSubstring: P1, _indexOfToken: P2, _indexOfSelectedItem: P3): R;
    _baselineIsSpecialCasingForMiniFont<R = boolean>(): R;
    _commonInit<R = void>(): R;
    delegate<R = NSTokenFieldDelegate>(): R;
    setDelegate<R = void, P0 = NSTokenFieldDelegate>(_v: P0): R;
    tokenizingCharacterSet<R = NSCharacterSet>(): R;
    setTokenizingCharacterSet<R = void, P0 = NSCharacterSet>(_v: P0): R;
    completionDelay<R = number>(): R;
    setCompletionDelay<R = void, P0 = number>(_v: P0): R;
    tokenStyle<R = number>(): R;
    setTokenStyle<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSTokenField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = NSTokenField>(): R;
      new: <R = NSTokenField>() => R;
      defaultTokenizingCharacterSet<R = unknown>(): R;
      defaultCompletionDelay<R = number>(): R;
    }
  }
}

declare const NSTokenField: cocoa.NSTokenField.CLASS;
