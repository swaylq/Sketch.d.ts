/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextViewCompletionController<T0 = void, T1 = void, T2 = void> extends NSObject, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol {
    tableAction<R = void, P0 = unknown>(_tableAction: P0): R;
    sessionTerminatingEvent<R = unknown>(): R;
    completionWindow<R = unknown>(): R;
    currentTextView<R = unknown>(): R;
    displayCompletions_indexOfSelectedItem_forPartialWordRange_originalString_atPoint_forTextView<R = void, P0 = unknown, P1 = number, P2 = _NSRange, P3 = unknown, P4 = CGPoint, P5 = unknown>(_displayCompletions: P0, _indexOfSelectedItem: P1, _forPartialWordRange: P2, _originalString: P3, _atPoint: P4, _forTextView: P5): R;
    endDisplayWithNotification<R = void, P0 = unknown>(_endDisplayWithNotification: P0): R;
    endDisplay<R = void>(): R;
    endDisplayNoComplete<R = void>(): R;
    endDisplayAndComplete<R = void, P0 = boolean>(_endDisplayAndComplete: P0): R;
    _reloadWithCompletions<R = void, P0 = unknown>(__reloadWithCompletions: P0): R;
    displayCompletions_forPartialWordRange_originalString_atPoint_forTextView<R = void, P0 = unknown, P1 = _NSRange, P2 = unknown, P3 = CGPoint, P4 = unknown>(_displayCompletions: P0, _forPartialWordRange: P1, _originalString: P2, _atPoint: P3, _forTextView: P4): R;
    _reflectSelection<R = void, P0 = boolean>(__reflectSelection: P0): R;
    dealloc<R = void>(): R;
    _setupWindow<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTextViewCompletionController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol {
      alloc<R = NSTextViewCompletionController>(): R;
      new: <R = NSTextViewCompletionController>() => R;
      sharedController<R = unknown>(): R;
    }
  }
}

declare const NSTextViewCompletionController: cocoa.NSTextViewCompletionController.CLASS;
