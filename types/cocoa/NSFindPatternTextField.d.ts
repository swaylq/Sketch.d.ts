/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFindPatternTextField<T = any> extends cocoa.NSTextFinderBarTextField, cocoa.NSFindPatternFieldProtocol {
    _selectedFindPattern<R = void, P0 = unknown>(__selectedFindPattern: P0): R;
    _uniquePatterns<R = unknown>(): R;
    _rangesOfFindPattern<R = unknown, P0 = unknown>(__rangesOfFindPattern: P0): R;
    _uniqueFindPatternsInAttributedStringAttachments<R = void, P0 = unknown>(__uniqueFindPatternsInAttributedStringAttachments: P0): R;
    setStringValue<R = void, P0 = unknown>(_setStringValue: P0): R;
    _updateFindPatternsWithNewPatterns<R = void, P0 = unknown>(__updateFindPatternsWithNewPatterns: P0): R;
    _updateReplacePatternsWithNewPatterns<R = void, P0 = unknown>(__updateReplacePatternsWithNewPatterns: P0): R;
    _invalidateLayout<R = void>(): R;
    _insertFindPattern<R = void, P0 = unknown>(__insertFindPattern: P0): R;
    _insertFindPatternAttachment<R = void, P0 = unknown>(__insertFindPatternAttachment: P0): R;
    _findPatternAttachmentForFindPattern<R = unknown, P0 = unknown>(__findPatternAttachmentForFindPattern: P0): R;
    _eventIsInsertPatternKeyEquivalent<R = boolean, P0 = unknown>(__eventIsInsertPatternKeyEquivalent: P0): R;
    _fieldEditor<R = unknown>(): R;
    _isFindField<R = boolean>(): R;
    replaceField<R = unknown>(): R;
    findField<R = unknown>(): R;
    findPatternManager<R = cocoa.NSFindPatternManager>(): R;
    setFindPatternManager<R = void, P0 = cocoa.NSFindPatternManager>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSFindPatternTextField<T = any> extends cocoa.classes.NSTextFinderBarTextField, cocoa.classes.NSFindPatternFieldProtocol {
      alloc<R = NSFindPatternTextField>(): R;
      new: <R = NSFindPatternTextField>() => R;
    }
  }
}

declare const NSFindPatternTextField: cocoa.classes.NSFindPatternTextField;
