/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPredicateEditor<T0 = void, T1 = void, T2 = void> extends NSRuleEditor {
    _updatePredicate<R = void>(): R;
    _changedItem_toItem_inRow<R = void, P0 = unknown, P1 = unknown, P2 = number>(__changedItem: P0, _toItem: P1, _inRow: P2): R;
    _sendRuleAction<R = void>(): R;
    _queryValueForItem_inRow<R = unknown, P0 = unknown, P1 = number>(__queryValueForItem: P0, _inRow: P1): R;
    _queryChild_ofItem_withRowType<R = unknown, P0 = number, P1 = unknown, P2 = number>(__queryChild: P0, _ofItem: P1, _withRowType: P2): R;
    _queryNumberOfChildrenOfItem_withRowType<R = number, P0 = unknown, P1 = number>(__queryNumberOfChildrenOfItem: P0, _withRowType: P1): R;
    _initRuleEditorShared<R = void>(): R;
    reloadCriteria<R = void>(): R;
    _sendsActionOnIncompleteTextChanges<R = boolean>(): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_setAction: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_setTarget: P0): R;
    _templateControlValueDidChange<R = void, P0 = unknown>(__templateControlValueDidChange: P0): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    controlTextDidEndEditing<R = void, P0 = unknown>(_controlTextDidEndEditing: P0): R;
    controlTextDidBeginEditing<R = void, P0 = unknown>(_controlTextDidBeginEditing: P0): R;
    _updatePredicateFromRows<R = void>(): R;
    _compoundPredicateTypeForRootRows<R = number>(): R;
    _predicateFromRowItem<R = unknown, P0 = unknown>(__predicateFromRowItem: P0): R;
    predicate<R = unknown>(): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    objectValue<R = unknown>(): R;
    _updateItemsByCompoundTemplates<R = void>(): R;
    _updateItemsBySimpleTemplates<R = void>(): R;
    _mergeTree<R = unknown, P0 = unknown>(__mergeTree: P0): R;
    _constructTreesForTemplates<R = unknown, P0 = unknown>(__constructTreesForTemplates: P0): R;
    _constructTreeForTemplate<R = unknown, P0 = unknown>(__constructTreeForTemplate: P0): R;
    _reflectPredicate<R = void, P0 = unknown>(__reflectPredicate: P0): R;
    _rowObjectFromPredicate<R = unknown, P0 = unknown>(__rowObjectFromPredicate: P0): R;
    _rowFromTemplate_originalTemplate_withRowType<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(__rowFromTemplate: P0, _originalTemplate: P1, _withRowType: P2): R;
    _setDefaultTargetAndActionOnView<R = void, P0 = unknown>(__setDefaultTargetAndActionOnView: P0): R;
    _wantsMinimalArchival<R = boolean>(): R;
    _forceUseDelegate<R = boolean>(): R;
    rowTemplates<R = NSArray>(): R;
    setRowTemplates<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace NSPredicateEditor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSRuleEditor {
      alloc<R = NSPredicateEditor>(): R;
      new: <R = NSPredicateEditor>() => R;
    }
  }
}

declare const NSPredicateEditor: cocoa.NSPredicateEditor.CLASS;
