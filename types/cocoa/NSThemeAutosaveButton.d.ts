/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSThemeAutosaveButton<T0 = void, T1 = void, T2 = void> extends NSButton, NSPopoverDelegateProtocol {
    documentEditingState<R = number>(): R;
    setDocumentEditingState_animate<R = void, P0 = number, P1 = boolean>(_setDocumentEditingState: P0, _animate: P1): R;
    _shouldColorTextForAlertPopover<R = boolean>(): R;
    mouseDownEvent_wouldReactivatePopover<R = boolean, P0 = unknown, P1 = unknown>(_mouseDownEvent: P0, _wouldReactivatePopover: P1): R;
    _hidePopover<R = void>(): R;
    _delayedHideAlertPopover<R = void>(): R;
    _userBecameIdleForAlertPopover<R = void>(): R;
    _setupAlertPopoverAutohideIgnoringRecentEvents<R = void, P0 = boolean>(__setupAlertPopoverAutohideIgnoringRecentEvents: P0): R;
    _showAlertPopoverIgnoringRecentEvents<R = void, P0 = boolean>(__showAlertPopoverIgnoringRecentEvents: P0): R;
    _showDocumentPopoverThenContinue<R = void, P0 = CDUnknownBlockType>(__showDocumentPopoverThenContinue: P0): R;
    _repositionPopover<R = void>(): R;
    _popoverPositioningRectInSuperview<R = CGRect>(): R;
    _setTitleAndRedisplay<R = void, P0 = unknown>(__setTitleAndRedisplay: P0): R;
    _buttonTitle<R = unknown>(): R;
    updateRolloverState<R = void>(): R;
    _performMouseDownWithEvent<R = boolean, P0 = unknown>(__performMouseDownWithEvent: P0): R;
    _shouldShowDocumentPopoverWithMouseDownEvent<R = boolean, P0 = unknown>(__shouldShowDocumentPopoverWithMouseDownEvent: P0): R;
    _setTitleCellHighlighted<R = void, P0 = boolean>(__setTitleCellHighlighted: P0): R;
    _showOrHideArrowAnimate_completionBlock<R = void, P0 = boolean, P1 = CDUnknownBlockType>(__showOrHideArrowAnimate: P0, _completionBlock: P1): R;
    _cancelFadeAnimationDelay<R = void>(): R;
    _setAnimationCompletionBlock_withDuration<R = void, P0 = CDUnknownBlockType, P1 = number>(__setAnimationCompletionBlock: P0, _withDuration: P1): R;
    _cancelAnimationCompletionBlock<R = void>(): R;
    _updateSeparatorFieldStringValue<R = void>(): R;
    _arrowShouldBeHidden<R = boolean>(): R;
    _documentWindow<R = unknown>(): R;
    _containingThemeFrame<R = unknown>(): R;
    nonModalDocumentError<R = NSError>(): R;
    setNonModalDocumentError<R = void, P0 = NSError>(_v: P0): R;
    documentAutosavingError<R = NSError>(): R;
    setDocumentAutosavingError<R = void, P0 = NSError>(_v: P0): R;
    displayedPopover<R = NSPopover>(): R;
    _shouldShowSeparatorField<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSThemeAutosaveButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton, NSPopoverDelegateProtocol {
      alloc<R = NSThemeAutosaveButton>(): R;
      new: <R = NSThemeAutosaveButton>() => R;
      _textColorForDisplayingAlertPopover<R = unknown>(): R;
    }
  }
}

declare const NSThemeAutosaveButton: cocoa.NSThemeAutosaveButton.CLASS;
